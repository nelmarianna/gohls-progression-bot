function selectify(options, select) {

	const choiceOptions = [];
	let key = 'name';
	if (select) {key = 'label';}

	for (const opt in options) {
		choiceOptions.push({
			[key]: options[opt],
			value: opt,
		});
	}
	return choiceOptions;
}

module.exports = {
	selectify,
};