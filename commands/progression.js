const { SlashCommandBuilder }= require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('progression')
		.setDescription('Replies with progression!')
		.addStringOption(option => option.setName('name').setDescription('Enter your player\'s name').setRequired(true)),
	async execute(interaction){
		await interaction.reply({content:'progression!', ephemeral:true});
		const strPlayerName = interaction.options.getString('name');

		await interaction.followUp(strPlayerName + ' entered their progression');
	},
};

