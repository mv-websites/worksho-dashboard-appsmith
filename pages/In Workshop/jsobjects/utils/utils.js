export default {
	// getCustomers () {
		// const workshopList = Get_Workshop_List.data
		// const customerData = workshopList.map(item => item.Co_Name);
		// const uniqueCustomers = [...new Set(customerData)]
		// const customerObject = uniqueCustomers.map((customer) => {
			// return {"label": customer, "value": customer}
		// })
		// return customerObject;
	// }
	getStatus() {
		return [
			{
				"label": "1. COM REQUESTED: Request to fulfil an order",
				"value": "XR"
			},{
				"label": "2. MM REQUEST: Workshop request to get the machine from B2",
				"value": "M1"
			},{
				"label": "3. RAW STOCK: Hold area once arrived at Mossfield",
				"value": "RW"
			},{
				"label": "4. WS - PRE- BUILD: Stripping/washing/painting",
				"value": "PB"
			},{
				"label": "5. WS - HOLD: Awaiting parts",
				"value": "RH"
			},{
				"label": "6. WS - AVAILABLE: Pre build complete, awaiting engineers to begin rebuild",
				"value": "WS"
			},{
				"label": "7. WS - RE-BUILD: Engineer working on the unit",
				"value": "RB"
			},{
				"label": "8. WS - PDI: Pre delivery inspection (unit check and tested)",
				"value": "PD"
			},{
				"label": "9. PACKAGING: Packaged to be delivered up to B2 ready for installation",
				"value": "PK"
			},{
				"label": "10. AVAILABLE: At B2 complete to be allocated to a job.",
				"value": "AV"
			},{
				"label": "WS - PR HARVEST: (SCRAP asset – parts taken off to support other units)",
				"value": "HV"
			},{
				"label": "WS - VERIFY",
				"value": "VF"
			}
		]
	},
	selectStatusFilter(value) {
		Status_Select.setSelectedOption(value)
	}
}