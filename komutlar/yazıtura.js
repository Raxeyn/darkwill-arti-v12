const Discord = require("discord.js");
const chancejs = require("chance");
const chance = new chancejs();

const cevaplar = ["**YAZI-TURA: __TURA__**", "**YAZI-TURA: __YAZI__**"];

exports.run = function(client, message) {

var matador  = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (matador === "YAZI-TURA: __YAZI__**") {

const Embedmatador = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(matador)
      .setThumbnail(
        "http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg"
      );

return message.channel.send(Embedmatador);

  } else if (matador === "**YAZI-TURA: __TURA__**") {

    const Embedmatador = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(matador)
      .setThumbnail(
        "https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg"
      );

return message.channel.send(Embedmatador);

  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yazı-tura",
  description: "Yazı-Tura atar.",
  usage: "yazıtura"
};
