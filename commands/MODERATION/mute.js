const Discord = require("discord.js")
const fs = require("fs");
const ms = require("ms");
   //<prefix>mute @mention that user <reason>
module.exports.run = async (bot, message ,args) => {
let mutes = JSON.parse(fs.readFileSync("./data/warning.json","utf8"));

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("could't find them yo!");
if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("u cannot mute a user who has permission of administrator")
let reason = args.join(" ").slice(22);
if(!mutes[wUser.id]) mutes[wUser.id] = {
    mutes: 0
};

fs.writeFile("./data/warnings.json", JSON.stringify(mutes), (err) => {
    if (err) console.log(err);
});

 let warnEmbed = new Discord.RichEmbed()
 .setDescription("mutes")
 .setAuthor(message.author.username)
 .setColor("#fc6400")
 .addField("Muted user", `<@${wUser.id}>`)
 .addField("Muted in", message.channel)
 .addField("Reason", reason);

let warnchannel = message.guild.channels.find(`name`, "incidents");
if(!warnchannel) return("could't find channel");

warnchannel.send(warnEmbed);
if(mutes[wUser.id].mutes == 0){
let muterole = message.guild.roles.find(`name`, "muted");
if(!muterole) return message.reply("you should create that role dude!")
let mutetime = '7200s';
await(wUser.addRole(muterole.id));
message.channel.send(`<@${wUser.id}> has beed temp. muted for 2 hrs!`)

setTimeout(function(){
    wUser.removeRole(muterole.id)
    message.reply(`<@${wUser.id}> have been unmuted.`)

}, ms(mutetime))
}
}
module.exports.command = {
name: 'mute',
permission: "ADMINSTRATOR",
description: "MUTE A USER",
usage: `<prefix>mute @mention <reason> {Don't Include <>}`,
category: "MODERATION",
enabled: true
};