const Discord = require("discord.js")
const fs = require("fs");
const ms = require("ms");
   //<prefix>warn @mention that user <reason>
module.exports.run = async (bot, message ,args) => {
let bans = JSON.parse(fs.readFileSync("./data/ban.json","utf8"));

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("could't find them yo!");
if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("done")
let reason = args.join(" ").slice(22);
if(!bans[wUser.id]) bans[wUser.id] = {
    bans: 0
};


fs.writeFile("./data/warnings.json", JSON.stringify(bans), (err) => {
    if (err) console.log(err);
});

 let warnEmbed = new Discord.RichEmbed()
 .setDescription("warns")
 .setAuthor(message.author.username)
 .setColor("#fc6400")
 .addField("warned user", `<@${wUser.id}>`)
 .addField("Reason", reason);

let warnchannel = message.guild.channels.find(`name`, "incidents");
if(!warnchannel) return("could't find channel");

warnchannel.send(warnEmbed);
if(bans[wUser.id].bans == 0){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned!`)
    
}
} 

module.exports.command = {
name: 'ban',
permission: "ADMINSTRATOR",
description: "BAN A USER",
usage: `<prefix>ban @mention <reason> {Don't Include <>}`,
category: "MODERATION",
enabled: true
};
