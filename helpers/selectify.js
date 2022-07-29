function selectify(options) {

	const selectMenuOptions = [];

	for (const opt in options) {
		selectMenuOptions.push({
			label: options[opt],
			value: opt,
		});
	}

	return selectMenuOptions;
}

module.exports = {
	selectify,
};