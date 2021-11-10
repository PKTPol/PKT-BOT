const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const keepAlive = require("./server")
const { MessageEmbed } = require('discord.js');

client.on("ready", () => {console.log(`Logged in as ${client.user.tag}!`)
})


client.on("message", msg => {
  if (msg.content === "ohelp") {
    msg.reply("Hola! soy Oliv Beta Bot, estoy aqui para que me probeis antes de que empieze a funcionar en el servidor de Oliv, por favor reportar qualquier error que detecteis y sugerir cosas que pueda hacer! Os dejo la lista de comandos que tengo:  ohelp todos mis comandos ohello digo ola y oredes te digo todas las redes de Oliv  ")
 }
})
client.on("message", msg => {
  if (msg.content === "ohello") {
    msg.reply("olaaaa")
 }
})
client.on("message", msg => {
  if (msg.content === "oredes") {
    msg.reply("Sigueme en todas mis redes!🎀✨ Twitch: https://twitch.tv/olivlivliv   IG: https://instagram.com/paolivliv Twitter: https://twitter.com/PaOlivLiv   Youtube: https://www.youtube.com/c/OlivLiv")
 
 }
})
keepAlive()
client.login(process.env['Token']);