const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message ,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
    if(message.member.hasPermission("ADMINISTRATOR"));
    {
        const embed = new Discord.RichEmbed()
        .setColor("#fc6400")
        .setTitle("Important Announcement:")
        .setDescription(args.join(" "));
        message.channel.send('@everyone')
        message.channel.send(embed)

    }
}

module.exports.command = {
name: 'announcement',
permission: "ADMINSTRATOR",
description: "announcement",
usage: `.announcement`,
category: "MODERATION",
enabled: true
};

