export default {
	async chartData (year = 2026) {
		const slotsRaw = await Booking_Slots.run({year})
		const slots = slotsRaw.map((slot) => ({
			"Call_Id": slot.Call_Id,
			"eq_description": slot.eq_description,
			"bookings": JSON.parse(slot.bookings)
		}))

		Booking_Slots.clear()

		return {
			"year": year,
			"equipment": slots
		}
	},
	async fullRemainingYearSlots(year = 2026) {
		const numberArray = Array.from({ length: 520 }, (_, i) => i);
		const splitSlotsToday = date.dateToSlot(year, new Date())
		const slots = numberArray.slice(splitSlotsToday)

		const dates =  slots.map((slot) => {
			const slotDate = date.slotToDate(year, slot)
			return {
				slot: slot,
				date: slotDate.date,
				halfDay: slotDate.halfDay
			}
		})
		
		Availability_Table.setData(dates)
		return dates

	}
}