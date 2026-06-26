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
		// return Availability_Table.
		const numberArray = Array.from({ length: 520 }, (_, i) => i);
		const splitSlotsToday = date.dateToSlot(year, new Date());
		const slots = numberArray.slice(splitSlotsToday)
		
		const days = ["Mon", "Tues", "Wed", "Thu", "Fri"]
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		const dates =  slots.map((slot) => {
			const slotDateObject = date.slotToDate(year, slot)
			const slotDate = new Date(slotDateObject.date)
			return {
				value: slot,
				label: `${days[slotDate.getDay()-1]} ${slotDate.getDate()} ${months[slotDate.getMonth()]} - ${slotDateObject.halfDay}`
			}
		});
		
		MultiSelect1.setSelectedOptions([])

		return dates

	}
}