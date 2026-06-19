export default {
	async eqModalOpen (call_ref) {
		showModal(Eq_Schedule_Modal.name)
		Eq_Modal_Heading.setText(call_ref)
	}
}