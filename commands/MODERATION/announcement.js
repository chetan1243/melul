const Discord = require('discord.js');
const superagent = require('superagent');

/*module.exports.run = async (bot, message ,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
    if(message.member.hasPermission("ADMINISTRATOR"));
    {
        let text = args.join(" ")
    
        let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]);
      
        let achannel = message.guild.channels.find(`name`, channel);
        const embed = new Discord.RichEmbed()
        .setColor("#fc6400")
        .setTitle("Important Announcement:")
        .setDescription(text);
        achannel.send('@everyone')
        achannel.send(embed)
        

    }
} */
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you did't have permission to use this command! sorry.");
     let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]);
    let text = args.slice(1).join(" ");
    const embed = new Discord.RichEmbed()
            .setColor("#fc6400")
            .setTitle("Important Announcement:")
            .setDescription(text);
            channel.send('@everyone')
            channel.send(embed)
    
    }

module.exports.command = {
name: 'announcement',
permission: "ADMINSTRATOR",
description: "announcement",
usage: `.announcement <message> channel`,
category: "MODERATION",
enabled: true
};

