// Sample Discord Status bot By PiglinPlayz & Play Piglin Network. Please keep credit in message above when using this repo.
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
// Also allows your bot to have a status message like playing watching etc
client.once('ready', () => {
	console.log('Ready!');
  client.user.setPresence({ activities: [{ name: '/status | Coming Soon' }], status: 'idle' });
});



// Login to Discord with your client's token
client.login(token);