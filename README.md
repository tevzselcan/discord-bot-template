# Discord bot template

TypeScript and discord.js bot template.

## Installation

Clone this repository and edit the .ENV file (paste your Discord bot token and your Discord profile ID).

Install all the needed packages with `node install` and run the bot with `ts-node index.ts`.

## Adding commands and events

Follow this example to create aditional commands. If you want the command to be only accessible to you, add the `developer: true` option.

```typescript
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
```

To add new events follow this example.

```typescript
import { Client } from "discord.js";

export = {
  name: "ready",
  once: true,
  async execute(client: Client) {
    console.log("The bot is ready.");
  },
};
```
