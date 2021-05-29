const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const codeworld = new Discord.MessageEmbed()
    .setAuthor('1881-193∞')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/836695292191572019/837286479851159552/tenor.gif`)
    return message.channel.send(codeworld);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a','atam','ataturk'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Çok Yaşa Paşam.',
  usage: 'Atatürk'
};
