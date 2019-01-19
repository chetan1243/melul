const Discord = require('discord.js');
const superagent = require('superagent');


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
     let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]);
    let text = args.slice(1).join(" ");
    const embed = new Discord.RichEmbed()
            .setColor("#fc6400")
            .setTitle("Important Announcement:")
            .setDescription(text);
            channel.send('@here')
            channel.send(embed)
    
    }

module.exports.command = {
name: 'hannounce',
permission: "ADMINSTRATOR",
description: "announcement",
usage: `.announcement <message> channel`,
category: "MODERATION",
enabled: true
};
