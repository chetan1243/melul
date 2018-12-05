const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("GROUP A")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("SQUAD NAMES-","€ŞĦΔŇǤ ŞĦΔĦ NOOBDE NE NAHI BATAYA.")
    .addField("TIMINGS - ","€ŞĦΔŇǤ ŞĦΔĦ NOOBDE NE NAHI BATAYA.");

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'groupa',
    permission: "None",
    description: "Gives details of squad of group a",
    usage: `group A info`,
    category: "GSC",
    enabled: true
};