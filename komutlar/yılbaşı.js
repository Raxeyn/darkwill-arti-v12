const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2021-01-01 00:00:00");
  let zaman = ms(yilbasi - Date.now());//MATADOR

return message.channel.send(
    `<a:yilbasi:786263885346635846> **Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n<a:yilbasi:786263885346635846> **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı!**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "yılbaşı",

  description:
    "Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: ""
};
