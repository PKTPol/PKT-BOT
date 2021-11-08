const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {console.log(`Logged in as ${client.user.tag}!`)
})


client.on("message", msg => {
  if (msg.content === "help") {
    msg.reply("Para ayuda haz esto")
 }
})
client.on("message", msg => {
  if (msg.content === "hello") {
    msg.reply("olaaaa")
 }
})

client.login(process.env['Token']);