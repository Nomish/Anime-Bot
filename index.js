const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
//status BOTA
bot.on("ready", () =>{
    console.log("Bot Launched...")

    //status
    bot.user.setStatus("online")

    //game & streaming
    bot.user.setActivity("Watching Anime")
});

bot.login(botSettings.token);