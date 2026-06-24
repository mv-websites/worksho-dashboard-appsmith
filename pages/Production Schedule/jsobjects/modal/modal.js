export default {
	async eqModalOpen (call_ref = 3563266) {
		const callRefString = call_ref.toString();
		
		// Get KPIS
		const targets = await Eq_Targets.run({call_ref: callRefString})
		Schedule_Targets_table.setData(targets)
		
		
		showModal(Eq_Schedule_Modal.name)
		Eq_Modal_Heading.setText(`${call_ref}`)
		return call_ref;
	}
}