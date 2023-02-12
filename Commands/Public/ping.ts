const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

export = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns the latency."),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const latency = Date.now() - interaction.createdTimestamp;

    await interaction.reply({
      content: `${latency} ms.`,
      ephemeral: true,
    });
  },
};
