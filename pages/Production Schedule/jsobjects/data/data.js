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
	async getItemScheduleTableData() {
		
	}
}