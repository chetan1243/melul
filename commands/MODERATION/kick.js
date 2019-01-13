const Discord = require("discord.js")
const fs = require("fs");
const ms = require("ms");
   //<prefix>kicks @mention that user 
module.exports.run = async (bot, message ,args) => {
let kicks = JSON.parse(fs.readFileSync("./data/kick.json","utf8"));

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("could't find them yo!");
if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("done")

if(!kicks[wUser.id]) kicks[wUser.id] = {
    kicks: 0
};



fs.writeFile("./data/warnings.json", JSON.stringify(kicks), (err) => {
    if (err) console.log(err);
});

 let warnEmbed = new Discord.RichEmbed()
 .setDescription("kick")
 .setAuthor(message.author.username)
 .setColor("#fc6400")
 .addField("kicksed user", `<@${wUser.id}>`)

let warnchannel = message.guild.channels.find(`name`, "incidents");
if(!warnchannel) return("could't find channel");

warnchannel.send(warnEmbed);
if(kicks[wUser.id].kicks == 0){
    message.guild.member(wUser).kick();
    message.reply(`<@${wUser.id}> has been kicked!`)
    
}
} 

module.exports.command = {
name: 'kick',
permission: "ADMINSTRATOR",
description: "kick A USER",
usage: `<prefix>kick @mention  {Don't Include <>}`,
category: "MODERATION",
enabled: true
};
