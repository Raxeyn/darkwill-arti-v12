const { MessageEmbed } = require('discord.js');



exports.run = function(client, message, args) {

  var ping = client.ws.ping
  let color;
  if (ping < 100) color = 'GREEN'
  if (100 < ping < 250) color = 'YELLOW'
  if (ping > 250) color = 'RED'
  var pingEmbed = new MessageEmbed()
    .setColor(color)
    .setDescription(`Pingim: **${client.ws.ping}** ms.`)
    .setFooter(`${client.user.username} Ping Sistemi`)
  return message.channel.send(pingEmbed).then(msg => {
    msg.delete({ timeout: 60000 })
  });

};
exports.conf = {
  aliases: ['botping', 'bping'],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'ping',
};
