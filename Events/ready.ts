import { Client } from "discord.js";

const { loadCommands } = require("../Handlers/commandHandler");

export = {
  name: "ready",
  once: true,
  async execute(client: Client) {
    await loadCommands(client);
  },
};
