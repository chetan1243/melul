const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message ,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
    if(message.member.hasPermission("ADMINISTRATOR"));
    {
        let text = args.join(" ")
        ///let mention = message.guild.member(message.mentions.users.first()) || message.guild.users.get(args[0])
      
        let achannel = message.guild.channels.find(`name`, 'announcements');
        const embed = new Discord.RichEmbed()
        .setColor("#fc6400")
        .setTitle("Important Announcement:")
        .setDescription(text);
        achannel.send('@everyone')
        achannel.send(embed)
        

    }
}

module.exports.command = {
name: 'announcement',
permission: "ADMINSTRATOR",
description: "announcement",
usage: `.announcement <message> channel`,
category: "MODERATION",
enabled: true
};

