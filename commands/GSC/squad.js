const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("REGISTERED SQUADS(ALL TEAMS)")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("SQUAD NAMES-","€ŞĦΔŇǤ ŞĦΔĦ NOOBDE NE NAHI BATAYA.");

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'squad',
    permission: "None",
    description: "Gives details of squad",
    usage: `squad info`,
    category: "GSC",
    enabled: true
};