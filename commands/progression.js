const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const { skaters } = require('../data/training-options.js');
const { selectify } = require('../helpers/selectify.js');

module.exports = {

	data:
		new SlashCommandBuilder().setName('progression')
			.setDescription('Replies with progression!')
			.addStringOption(option => option.setName('name').setDescription('Enter your player\'s name').setRequired(true)),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(new SelectMenuBuilder().setCustomId('select').setPlaceholder('Select').addOptions(selectify(skaters)));
		await interaction.reply({ content:'progression!', ephemeral:true, components:[row] });
		const strPlayerName = interaction.options.getString('name');
		await interaction.followUp(`${strPlayerName}'s progression was entered`);
	},
};

