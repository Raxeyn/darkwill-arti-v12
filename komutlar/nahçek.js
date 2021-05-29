let Discord = require("discord.js");
let { hata, oldu, prefix, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {


    let kullanıcı = message.mentions.users.first()
    
    
    if(!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription(`:dark_sunglasses: Bir Kullanıcı Etiketlede Ona Nah Çekeyim!`).setColor(hata))
  
  
  let embed = new Discord.MessageEmbed()
  .setDescription(`**${message.author.username}, Adlı Kişi, ${kullanıcı.username} Adlı Kişiye Nah Çekti!**`)
  .setImage('https://eightbornv.com/uploads/monthly_2020_09/small_Nah.gif.104e992333bb02937d8a08e3b54b323d.gif')
  .setColor(oldu)
  
  message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,   
  guildOnly: false,
  aliases: ["nahçek"],
  permLevel: 0
};

module.exports.help = {
  name: 'nah-çek'
};
