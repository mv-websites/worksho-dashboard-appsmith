export default {
	loadingModalTrigger(isLoading = true, loadingText = "") {
		if (isLoading) {
			showModal(Loading_Modal.name)
		} else {
			closeModal(Loading_Modal.name)
		}
		LoadingText.setText(loadingText)
	},
	async onTable1RowChange () {
		this.loadingModalTrigger(true, "Fetching user details...")
		resetWidget("Select_Position")
		Table2.setData([])
		Table3.setData([])

		const [positions, qualifications] = await Promise.all([
			Person_Positions.run(),
			Person_Qualifications.run(),
			All_Positions.run()
		]).catch(this.loadingModalTrigger(false));

		Table2.setData(positions);
		Table3.setData(qualifications);
		this.loadingModalTrigger(false);
	},
	async onPageLoad () {
		this.loadingModalTrigger(true, "Fetching users...");
		await Select_MV11_Workshop_People1.run();
		await this.onTable1RowChange();
	},
	async assignPosition() {
		this.loadingModalTrigger(true, "Assigning position...");
		try {
			await Add_Position.run({
				position_id: Select_Position.selectedOptionValue,
				person_id: Table1.selectedRow.id
			})

			await this.onTable1RowChange();
		} catch (err) {
			showAlert("Failed to assign position with the following error: " + err.message, "error")
			this.loadingModalTrigger(false)
		}
	},
	async deletePosition(){
		this.loadingModalTrigger(true, "Deleting position...");
		try {
			Delete_Position.run({
				position_id: Table2.triggeredRow.id,
				person_id: Table1.selectedRow.id
			})

			await this.onTable1RowChange();
		} catch (err) {
			showAlert("Failed to delete position with the following error: " + err.message, "error")
			this.loadingModalTrigger(false)
		}
	}
}