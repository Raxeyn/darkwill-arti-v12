const Discord = require('discord.js');
 
 
 
const mapping = {
 
    ' ': '   ',
 
    '0': '0️⃣',
 
    '1': '1️⃣',
 
    '2': '2️⃣',
 
    '3': '3️⃣',
 
    '4': '4️⃣',
 
    '5': '5️⃣',
 
    '6': '6️⃣',
 
    '7': '7️⃣',
 
    '8': '8️⃣',
 
    '9': '9️⃣',
 
    '!': '❕',
 
    '?': '❔',
 
    '#': '#️⃣',
 
    '*': '*️⃣'
 
};
 
 
 
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
 
        mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
 
});
 
 
 
 
 
exports.run = function(client, message, args) {
 
 
 
        if (args.length < 1) return message.reply('Lütfen bir mesaj belirt. **Doğru Kullanım:** !emojiyazı <mesaj>')
 
               
 
        message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));
 
 
 
};
 
 
 
exports.conf = {
 
  enabled: true,
 
  guildOnly: true,
 
  aliases: [],
 
  permLevel: 0
 
};
 
 
 
exports.help = {
 
  name: 'emojiyazı',
 
  description: 'Mesajınızı emoji haline getirir',
 
  usage: 'emojiyazı <mesaj>' };
