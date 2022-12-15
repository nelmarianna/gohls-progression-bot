const { picksDictionary } = require('../data/training-options');
const { updateProgression } = require('../google-api/index.js');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isStringSelectMenu()) return;

		if (interaction.customId === 'select-custom-pick') {
			const playerName = interaction.message.content.split(',')[0];
			const selected = interaction.values;
			selected.forEach((elem, i) => {
				selected[i] = picksDictionary[elem];
			});

			const strSelected = selected.join(', ');
			const pick = interaction.values.length;

			const values = [
				[
					playerName,
					`Custom Pick ${pick}`,
					...interaction.values,
				],
				// Additional rows ...
			];

			await updateProgression(values);
			await interaction.update({ content: `${playerName}'s progression has been entered: Custom Pick ${pick}: ${strSelected}`, components: [], ephemeral: true });
		}
	},
};