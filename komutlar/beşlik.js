const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif",
  "https://tenor.com/view/high-five-%C3%A7ak-be%C5%9Flik-kedi-cat-cats-gif-19651349",
  "https://tenor.com/view/high-five-%C3%A7ak-be%C5%9Flik-%C3%A7ak-kanka-best-friend-gif-19738581",
  "https://tenor.com/view/cak-bir-beslik-gif-12300164"
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Kendin ile beşlik çakışamazsın')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine beşlik çaktı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'beşlik'
};
