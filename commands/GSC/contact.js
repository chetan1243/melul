const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let text = args.slice(0).join(" ");
    let taker = await bot.users.get(botconfig.owner);
    const embed = new Discord.RichEmbed()
            .setColor("#fc6400")
            .setTitle("MESSAGE-")
            .addField(" Owner", message.guild.owner.user.tag, true)
            .setDescription(text);
            taker.send(embed);
            message.channel.send(":white_check_mark: YOUR MESSAGE IS DELIVERED TO MR_EVIL!");
    
 };

 module.exports.command = {
    name: 'contact',
    permission: "None",
    description: "send msg to developer of bot!",
    usage: `mesg to developer of bto`,
    category: "GSC",
    enabled: true

};
