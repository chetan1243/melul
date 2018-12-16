const Discord = require("discord.js")
const fs = require("fs");
const ms = require("ms");
   //<prefix>warn @mention that user <reason>
module.exports.run = async (bot, message ,args) => {
let warns = JSON.parse(fs.readFileSync("./data/warnings.json","utf8"));

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("could't find them yo!");
if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("done")
let reason = args.join(" ").slice(22);
if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
};

warns[wUser.id].warns++;

fs.writeFile("./data/warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
});

 let warnEmbed = new Discord.RichEmbed()
 .setDescription("warns")
 .setAuthor(message.author.username)
 .setColor("#fc6400")
 .addField("warned user", `<@${wUser.id}>`)
 .addField("warned in", message.channel)
 .addField("Number of warnings", warns[wUser.id].warns)
 .addField("Reason", reason);

let warnchannel = message.guild.channels.find(`name`, "incidents");
if(!warnchannel) return("could't find channel");

warnchannel.send(warnEmbed);
if(warns[wUser.id].warns == 1){    
    
message.channel.send(`<@${wUser.id}> DON'T BREAK THE RULES OF GAMERS SUPPORTIVE COMMUNITY SERVER... THIS IS A WARNING TO YOU AFTER THIS YOU WILL BE MUTED AND IF U DID'T STOP THIS KIND OF WORK U WILL BE BANNED!`)
    }



if(warns[wUser.id].warns == 2){
let muterole = message.guild.roles.find(`name`, "muted");
if(!muterole) return message.reply("you should create that role dude!")
message.channel.send(`<@${wUser.id}> DON'T BREAK THE RULES OF GAMERS SUPPORTIVE COMMUNITY SERVER... THIS IS A WARNING TO YOU AFTER THIS YOU WILL BE MUTED AND IF U DID'T STOP THIS KIND OF WORK U WILL BE BANNED!`)
let mutetime = '1000s';
await(wUser.addRole(muterole.id));
message.channel.send(`<@${wUser.id}> has beed temp. muted!`)

setTimeout(function(){
    wUser.removeRole(muterole.id)
    message.reply(`<@${wUser.id}> have been unmuted.`)

}, ms(mutetime))
}
if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("you should create that role dude!")
    
    let mutetime = '5000s';
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has beed temp. muted!`)
    
    setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> have been unmuted.`)
    
    }, ms(mutetime))
    }
    if(warns[wUser.id].warns == 4){
        let muterole = message.guild.roles.find(`name`, "muted");
        if(!muterole) return message.reply("you should create that role dude!")
        
        let mutetime = '10000s';
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has beed temp. muted!`)
        
        setTimeout(function(){
            wUser.removeRole(muterole.id)
            message.reply(`<@${wUser.id}> have been unmuted.`)
        
        }, ms(mutetime))
        }
if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned!`)
    
}
} 

module.exports.command = {
name: 'warn',
permission: "ADMINSTRATOR",
description: "WARN A USER",
usage: `<prefix>warn @mention <reason> {Don't Include <>}`,
category: "MODERATION",
enabled: true
};