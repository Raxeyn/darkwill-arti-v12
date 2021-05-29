const Discord = require('discord.js')

exports.run = function(client, message, args,params) {

 let destek = "839052014658912257"///destek log kanal id
 let yetkili = "762711416754798632" /// destek ekibi rol ID

message.channel.send(`<a:onaylamak:825688895286280232> Destek ekibi çağırıldı kısa sürede size yardım edicekler. <a:onaylamak:825688895286280232>`)
message.channel.createInvite({maxAge: 0}).then((invite) => {

const embed = new Discord.MessageEmbed()

.setTitle("<a:B_Yildiz:825644101985894400> Bir Destek Çağrısı Var!")
.addField("<a:B_Yildiz:825644101985894400> Sunucu İsmi:", message.guild.name, true)
.addField("<a:B_Yildiz:825644101985894400> Sunucu Sahbi:", message.guild.owner, true)
.addField("<a:B_Yildiz:825644101985894400> Davet Linki:", invite.url, true)
.setFooter(`Derhal yardıma gidin!!`)
client.channels.cache.get(destek).send(embed).then(client.channels.cache.get(destek).send(`<@&${yetkili}>`))

});

  

};

exports.conf = {

  aliases: [],
  enabled: true,
  guildOnly: false,
  permLevel: 0

};

exports.help = {

  name: 'destek-ekibi-çağır',
  description: 'Destek ekibi çağırırsınız',
  usage: 'yaz',

};
