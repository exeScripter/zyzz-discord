const Discord = require("discord.js");
require("dotenv").config();

const generateImage = require("./generateImage");

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
// When bot is ONLINE ==> then it types in console (Logged in as Zyzz | The Legend)
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
// First command, when you type "hi" it responds with "Hello, brah"
client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello, brah")
    }
})
// makes a const with welcome channel id
const welcomeChannelId = "969653068247465984"


// welcome message
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to the server brah!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)