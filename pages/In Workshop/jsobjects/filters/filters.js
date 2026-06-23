export default {
	normalise(str) {
		return (str || "")
			.toLowerCase()
			.trim()
			.replace(/\s+/g, " ")      // collapse multiple spaces
			.replace(/\s*\|\s*/g, "|") // normalise pipe spacing
			.replace(/[^\w| ]/g, "");  // optional: remove punctuation
	},
	findEquipment(equipmentList, call) {
		// Split make/model from the incoming object
		const [make = "", model = ""] = (call.Make_Model || "")
		.split("|")
		.map(s => this.normalise(s));

		const description = this.normalise(call.Description);

		return equipmentList.find(item => {
			const itemMake = this.normalise(item.make);
			const itemModel = this.normalise(item.model);
			const itemDescription = this.normalise(item.description);

			// Exact make/model match after normalisation
			if (itemMake === make && itemModel === model) {
				return true;
			}

			// Optional fallback if description also matches
			if (
				itemDescription &&
				description &&
				itemDescription === description
			) {
				return true;
			}

			return false;
		}) || null;
	}
}