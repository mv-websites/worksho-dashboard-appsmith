export default {
	backNavHandler () {
		var backToText;
		if (appsmith.URL.queryParams.back) {
			navigateTo(appsmith.URL.queryParams.back)
			backToText = appsmith.URL.queryParams.back
		} else {
			navigateTo("Production Schedule")
			backToText = "Production Schedule"
		}
		return backToText;
	},
	backBtnText () {
		const text = "Back to "
		if (appsmith.URL.queryParams.back) {
			return text + appsmith.URL.queryParams.back
		} else {
			return text + "Production Schedule"
		}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}