const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("messsage", function(message) {
    console.log(message.content);
});

bot.on("ready", function() {
    console.log("ready")
    });

client.login(process.env.BOT_TOKEN);
