const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

if (!message.guild) {

const Embedmatador = new Discord.MessageEmbed()//MATADOR

    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("<a:reddetmek:825688868107059201>**Eğlence Komutları Özel Mesajlarda Kullanılamaz**","**----------------------------------------------------------**")

return message.author.send(Embedmatador); }

if (message.channel.type !== 'dm') {//Fwhy Code

const Embedmatador = new Discord.MessageEmbed()

    .setAuthor('Joker')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/836695292191572019/837356746049585152/tumblr_f305a468d762ab72de7a6b87dae0730e_c584298c_400.gif`)

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
  name: 'joker',
  description: 'joker geliyor.',
  usage: 'joker baba'
}; 
