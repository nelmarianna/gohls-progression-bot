const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const { skaters, goalies, skatersPick, goaliesPick, progressionDictionary } = require('../data/training-options.js');
const { selectify } = require('../helpers/selectify.js');
const { updateProgression } = require('../google-api/index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('progression')
		.setDescription('Replies with progression!')
		.addSubcommand(subcommand =>
			subcommand
				.setName('skater')
				.setDescription('Progression for skaters')
				.addStringOption(option =>
					option
						.setName('name')
						.setDescription('Your in game name')
						.setRequired(true))
				.addStringOption(option =>
					option
						.setName('progression')
						.setDescription('Choose your progression from allowed options')
						.setRequired(true)
						.addChoices(...selectify(skaters))),
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName('goalie')
				.setDescription('Progression for goalies')
				.addStringOption(option => option.setName('name').setDescription('Your in game name').setRequired(true))
				.addStringOption(option => option.setName('progression')
					.setDescription('Choose your progression from allowed options')
					.setRequired(true)
					.addChoices(...selectify(goalies))),
		),
	execute: async (interaction) => {
		const strPlayerName = interaction.options.getString('name');
		const skaterCommand = interaction.options.getSubcommand() === 'skater';
		const progression = interaction.options.getString('progression');
		const progressionString = progressionDictionary[progression];
		const pick = skaterCommand ? skatersPick : goaliesPick;

		if (progressionString.includes('Custom')) {
			const max = parseInt(progressionString.substr(-1));
			let s = '';
			if (max > 1) s = 's';
			const row = new ActionRowBuilder()
				.addComponents(
					new StringSelectMenuBuilder()
						.setCustomId('select-custom-pick')
						.setPlaceholder('Nothing selected')
						.addOptions(selectify(pick, true))
						.setMaxValues(max),
				);

			await interaction.reply({ content: `${strPlayerName}, take your pick! Please select ${max} option${s} from the dropdown below.`, components: [row] });


		}
		else {
			const values = [
				[
					strPlayerName,
					progressionString,
				],
				// Additional rows ...
			];

			await updateProgression(values);

			await interaction.reply({ content: `${strPlayerName}'s progression was entered: ${progressionString}`, ephemerial: true });
		}
	},
};

