const Discord = require('discord.js');
const superagent = require('superagent');
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
     //let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]);
    let ruser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    let text = args.slice(1).join(" ");
    const embed = new Discord.RichEmbed()
            .setColor("#fc6400")
            .setTitle("Important NOITCE:")
            .setDescription(text);
            //ruser.send(`@everyone`)
            ruser.send(embed)
            message.channel.send(`Your message sent to <@${ruser.id}>`)
            let mutetime = '0s';
            setTimeout(function(){
            message.delete(text)
            

            }, ms(mutetime))
}
    
   

module.exports.command = {
name: 'send',
permission: "ADMINSTRATOR",
description: "send msg to user",
usage: `.send @user msg`,
category: "MODERATION",
enabled: true
};

