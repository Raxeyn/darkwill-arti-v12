const Discord = require('discord.js')
//Dcs ekibi
exports.run = async (client, message, args) => {
  
  
    let intiharsebep = args.join(" ");
    if(intiharsebep.length < 1) {
    return message.reply('Neden İntihar Ettiğini Belirtmelisin.')
    } else {    
   message.delete()
  const intihar = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle('İNTİHAR VAKASI!')
      .setDescription(`${message.author.username} │ Adlı Kullanıcı **${intiharsebep}** Yüzünden İntihar Etti! `)
    
      message.channel.send(intihar);
    
    }

    
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'intihar-et'
    //dcs ekibi
  };
