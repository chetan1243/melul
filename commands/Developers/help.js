const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let botembed = new Discord.RichEmbed()

    .setDescription("CONFERMATION")
    .setColor("#00ff00")
    .addField("SENT-","A MSG CONTAINING HELP SENT TO YOUR DM! PLZ CHECK OUT!");

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'help',
    permission: "None",
    description: "just for comfermation",
    usage: `CONFERMATION`,
    category: "Developers",
    enabled: true
};