const Discord = require("discord.js");

exports.run = (client, message) => {

const matador = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**FUN BOT** \n**Efkarınız:** **%${funbot}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "MATADOR | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
