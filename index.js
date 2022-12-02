// Sample Discord Status bot By PiglinPlayz & Play Piglin Network. Please keep credit in message above when using this repo.
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config/token.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
// Also allows your bot to have a status message like playing watching etc
client.once('ready', () => {
	console.log('Ready!');
  client.user.setPresence({ activities: [{ name: 'your-status-here' }], status: 'idle' });
});
//Can be online, idle, dnd
//status can be anything you want just keep it in the ''


// Login to Discord with your client's token
// TOken can be found in /config/token.json
client.login(token);
