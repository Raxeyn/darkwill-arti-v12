const Discord = require('discord.js');
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.has('353541933261520907') && !message.member.hasPermission('ADMINISTRATOR') ) return message.channel.send('<a:reddetmek:825688868107059201> Bu kodu kullanmak için yeterli yetkin yok!')

 let kanal = args[0]
 if (!kanal) return message.channel.send("<a:reddetmek:825688868107059201> Bir Kanal ID'si Belirt")  

 client.channels.cache.get(kanal).join();

message.channel.send("<a:onaylamak:825688895286280232> Ses Kanalına Başarılı Bir Şekilde Bağlandım")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sesgir","ses-gir"],
  permLevel: 0
}
exports.help = {
  name: 'sesegir',
  description: "",
  usage: ''
}
