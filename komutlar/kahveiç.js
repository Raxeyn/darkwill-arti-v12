const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
// 

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const ıhlamur = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}  Türk Kahvesini İçti`) //Discord  Code Share
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setURL("")
      .setImage(
        `http://img03.blogcu.com/v2/images/orj/k/u/l/kulkedim/kulkedim_132520233787.gif`
      );
    return message.channel.send(ıhlamur);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kahve-iç", "kahveiç"],
  permLevel: 0
};

exports.help = {
  name: "kahve",
  description: "Kahve İçersiniz Ama Türk Kahvesii",
  usage: "kahve"
}
