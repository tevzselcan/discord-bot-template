require("dotenv").config();

export = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */

  async execute(interaction, client) {
    try {
      if (!interaction.isChatInputCommand()) return;

      const command = client.commands.get(interaction.commandName);
      if (!command) {
        return interaction.reply({
          content: "The command doesnt exist.",
          ephemeral: true,
        });
      }

      if (command.developer && interaction.user.id !== process.env.DEVELOPER_ID)
        return interaction.reply({
          content: "Developer command only.",
          ephemeral: true,
        });

      await command.execute(interaction, client);
    } catch (e) {
      console.log(e);
    }
  },
};
