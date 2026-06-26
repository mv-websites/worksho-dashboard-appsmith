export default {
	async insertSlots (year = 2026) {
		const values = 	Availability_Select.selectedOptionValues.map(slot => {
			return `(${Schedule_Targets_table.selectedRow.position_id}, ${User_Select.selectedOptionValue}, ${Eq_Modal_Heading.text}, ${year}, ${slot})`;
		}).join(",\n");
	

		try {
			await Add_Times.run({values})
			resetWidget("User_Select")
			resetWidget("Availability_Select")
			
			const callTimes = await Call_Schedule.run()
			Call_Schedule_table.setData(callTimes)
		} catch (err) {
			showAlert(`Failed to add schedule. Error: ${err.message}`, 'error')
		}
	}
}