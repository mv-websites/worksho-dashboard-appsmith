export default {
	getFirstFullWeekMonday(year = new Date().getFullYear()) {
		const d = new Date(year, 0, 1);
		// Move to first Monday
		while (d.getDay() !== 1) {
			d.setDate(d.getDate() + 1);
		}

		return d;
	},
	/**
	* SLOT TO DATE
	* Converts a slot number to a date and whether it is AM or PM
	*/
	slotToDate(year = new Date().getFullYear(), slot = 0) {
		const firstMonday = this.getFirstFullWeekMonday(year);
		const weekIndex = Math.floor(slot / 10);
		const remainder = slot % 10;
		const dayIndex = Math.floor(remainder / 2);
		const amPmIndex = remainder % 2;
		const result = new Date(firstMonday);

		result.setDate(
			firstMonday.getDate() +
			(weekIndex * 7) +
			dayIndex
		);

		return {
			date: result,
			halfDay: amPmIndex === 0 ? 'AM' : 'PM'
		};
	},
	/**
	* DATE TO SLOT
	* Converts a date to a slot number
	*/
	dateToSlot(bookingYear = 2026, targetDate = new Date('2026-06-03'), halfDay = 'AM') {
		const firstMonday = this.getFirstFullWeekMonday(bookingYear);
		const msPerDay = 1000 * 60 * 60 * 24;
		const diffDays = Math.floor(
			(targetDate - firstMonday) / msPerDay
		);
		const weekIndex = Math.floor(diffDays / 7);
		const dayIndex = diffDays % 7;

		if (dayIndex < 0 || dayIndex > 4) {
			throw new Error('Date is not Monday-Friday');
		}

		const amPmIndex = halfDay === 'AM' ? 0 : 1;

		return (
			(weekIndex * 10) +
			(dayIndex * 2) +
			amPmIndex
		);
	},
	slotToWeek(slot = 324) {
		return Math.floor(slot / 10) + 1;
	}
}