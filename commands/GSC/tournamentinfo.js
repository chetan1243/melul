const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("TOURNAMENT INFO")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("TOURNAMENT NAME-","€ŞĦΔŇǤ ŞĦΔĦ NOOB NE NAHI BATAYA.")
    .addField("TOURNAMENT DATE ","11-DEC-2018 - 12-DEC-2018")
    .addField("TOURNAMENT HOSTE","Tournament Supportive community")
    .addField("LINK OF REGISTRATION","LINK - €ŞĦΔŇǤ ŞĦΔĦ NOOB NE NAHI BATAYA")
    .addField("PRIZE OF TOURNAMENT","TO BE ANNOUNCED");

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'tournamentinfo',
    permission: "None",
    description: "Gives details of tournament",
    usage: `tournament info`,
    category: "GSC",
    enabled: true
};