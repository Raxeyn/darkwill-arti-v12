const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const codeworld = new Discord.MessageEmbed()
    .setAuthor('Buyrun Dünya')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.channel.send(codeworld);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dünya','Dünya','DÜNYA'],
  permLevel: 0
};

exports.help = {
  name: 'dünya',
  description: 'Dünya.',
  usage: 'dünya'
};
