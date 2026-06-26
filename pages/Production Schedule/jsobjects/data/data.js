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
	getBankHolidays(year = 2026) {
		const holidaysRaw = Public_Holidays.data
		const holidaysEnglandWales = holidaysRaw['england-and-wales'].events

		const holidays = holidaysEnglandWales.filter((day) => new Date(day.date).getFullYear() === year).map(date => date.date);

		return holidays;
	},
	async fullRemainingYearSlots(year = 2026) {
		// return Availability_Table.
		const numberArray = Array.from({ length: 520 }, (_, i) => i);
		const splitSlotsToday = date.dateToSlot(year, new Date());
		const slots = numberArray.slice(splitSlotsToday)
		const bankHolidays = this.getBankHolidays()

		const days = ["Mon", "Tues", "Wed", "Thu", "Fri"]
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		const dates = slots
		.filter(slot => {
			const slotDate = new Date(date.slotToDate(year, slot).date);

			return !bankHolidays.some(h =>
																new Date(h).toDateString() === slotDate.toDateString()
															 );
		})
		.map(slot => {
			const slotDateObject = date.slotToDate(year, slot);
			const slotDate = new Date(slotDateObject.date);

			return {
				value: slot,
				label: `${days[slotDate.getDay() - 1]} ${slotDate.getDate()} ${months[slotDate.getMonth()]} - ${slotDateObject.halfDay}`
			};
		});

		Availability_Select.setSelectedOptions([])

		return dates

	}
}