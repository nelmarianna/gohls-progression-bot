const { SlashCommandBuilder }= require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('progression')
		.setDescription('Replies with progression!'),
	async execute(interaction){
		await interaction.reply('progression!');
	}
}