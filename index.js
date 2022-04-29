const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
// When bot is ONLINE ==> then it types in console (Logged in as Zyzz | The Legend)
client.on("ready", () => {
    console.log('Logged in as Zyzz | The Legend ')
})
// First command, when you type "hi" it responds with "Hello, brah"
client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello, brah")
    }
})

client.login(process.env.TOKEN)