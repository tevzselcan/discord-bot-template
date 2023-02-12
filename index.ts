import { Client, GatewayIntentBits, Collection, Partials } from "discord.js";

const { User, Message, GuildMember, ThreadMember } = Partials;
require("dotenv").config();

const client: any = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");

client.commands = new Collection();
client.events = new Collection();

loadEvents(client);

client.login(process.env.TOKEN);
