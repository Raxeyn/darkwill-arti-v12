const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('Buyrun Ay')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/756534591652626542/762731046634258453/ay.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ay','Ay','AY'],
  permLevel: 0
};

exports.help = {
  name: 'ay',
  description: 'ay.',
  usage: 'ay'
};
