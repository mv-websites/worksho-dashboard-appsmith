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
		Table2.setData([])
		Table3.setData([])

		const [positions, qualifications] = await Promise.all([
			Person_Positions.run(),
			Person_Qualifications.run()
		]).catch(this.loadingModalTrigger(false));

		Table2.setData(positions);
		Table3.setData(qualifications);
		this.loadingModalTrigger(false);
	}
}