const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {console.log(`Logged in as ${client.user.tag}!`)
})


client.on("message", msg => {
  if (msg.content === "ohelp") {
    msg.reply("Hola! soy Oliv Beta Bot, estoy aqui para que me probeis antes de que empieze a funcionar en el servidor de Oliv, por favor reportar qualquier error que detecteis y sugerir cosas que pueda hacer! Os dejo la lista de comandos que tengo:  ohelp todos mis comandos ohello digo ola  ")
 }
})
client.on("message", msg => {
  if (msg.content === "hello") {
    msg.reply("olaaaa")
 }
})

client.login(process.env['Token']);