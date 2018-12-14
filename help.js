const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
  
    if(args[0] === "help") return message.channel.send(`Just do ${prefix}help instead.`);
    
   
 if(args[0]) {

     let command = args[0];
     if(bot.commands.has(command)) {
         command = bot.commands.get(command);
         let commandhelp = new Discord.RichEmbed()
         .setColor("LIGHT_PURPLE")
         .setAuthor(`${bot.user.username} ${command.command.name} help`)
         .setThumbnail(bot.user.displayAvatarURL)
         .setDescription(`**• Command Name:** ${command.command.name} \n \n **• Command Description:** ${command.command.description} \n \n **• Commamnd Permission:** ${command.command.permission} \n \n **• Command Usage:** ${prefix}${command.command.usage}`)
         .setFooter("Used By" + `${message.author.username}` + "on" + message.createdAt);
message.channel.send(commandhelp); // ye comamnd help hai main help nahi 
     }
 }
 if(!args[0]) {
     
    let owner = new Discord.RichEmbed()
    .setTitle("Owner COMMANDS")
    .setDescription(`${bot.user.username} Dev Comamnds`)  
    .setColor("BLUE")
    .setThumbnail("https://i.imgur.com/6JsuVCH.png");
    bot.commands.filter(cmd => cmd.command.category === "OWNER").map(cmd => owner.addField(cmd.command.name , `**${cmd.command.description}**`));

    let moderation = new Discord.RichEmbed()
    .setTitle("MODERATION COMMANDS")
    .setDescription(`${bot.user.username} Mod Comamnds`)  
    .setColor("BLUE")
    .setThumbnail("https://i.imgur.com/6JsuVCH.png");
    bot.commands.filter(cmd => cmd.command.category === "MODERATION").map(cmd => owner.addField(cmd.command.name , `**${cmd.command.description}**`));
    
    let guild = new Discord.RichEmbed()
    .setTitle("Guild COMMANDS")
    .setDescription(`${bot.user.username} Guild Commands`)  
    .setColor("BLUE")
    .setThumbnail("https://i.imgur.com/SuDr9pf.png");
    bot.commands.filter(cmd => cmd.command.category === "GUILD").map(cmd => guild.addField(cmd.command.name , `**${cmd.command.description}**`));
    
    let misc = new Discord.RichEmbed()
    .setTitle("Misc COMMANDS")
    .setDescription(`${bot.user.username} Misc Commands`) 
    .setColor("BLUE")
    .setThumbnail("https://i.imgur.com/8ObZIQl.png");
    bot.commands.filter(cmd => cmd.command.category === "MISC").map(cmd => misc.addField(cmd.command.name , `**${cmd.command.description}**`));
    

  let economy = new Discord.RichEmbed()
    .setTitle("Economy COMMANDS")
    .setDescription(`${bot.user.username} Economy Commands`) 
    .setColor("BLUE")
    bot.commands.filter(cmd => cmd.command.category === "ECONOMY").map(cmd => economy.addField(cmd.command.name , `**${cmd.command.description}**`));
    

    let GSC = new Discord.RichEmbed()
    .setTitle("GSC COMMANDS")
    .setDescription(`${bot.user.username} GSC Commands`) 
    .setColor("BLUE")
    bot.commands.filter(cmd => cmd.command.category === "GSC").map(cmd => GSC.addField(cmd.command.name , `**${cmd.command.description}**`));
    
try {
message.author.send(owner);
message.author.send(moderation);
message.author.send(guild);
message.author.send(misc);
message.author.send(economy);
message.author.send(GSC);
message.channel.send(`${message.author.username} Help Commands Have Been Sent To Your DM's`)
}
catch(e) {
message.channel.send(`${message.author.username} boi open your DM's so i can send you my help commands!!`)
};

}
};


module.exports.command = {
    name: 'help',
    permission: "none",
    aliases: ["h","hlp"],
    description: `Gives Help Commands Of bot`,
    usage: "help",
    category: "MISC",
    enabled: true
}; 

