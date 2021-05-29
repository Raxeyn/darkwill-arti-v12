const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();

module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);//
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;//
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);//
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));//
  }
if(!client.commands.get(command)) {
    
 message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu","Komutlarım da "+command+" adın da bir komut bulamadım! Yardım listeme bakmaya ne dersin?").setFooter("Darkwill +")).then(codeming => codeming.delete(8000))   
    
  }
  if (cmd) {
const CodEmingHerDaim = require("quick.db")
let meteyasin = CodEmingHerDaim.fetch("!methesu7washere")
if(meteyasin) {
if(message.author.id !== '353541933261520907') {
return message.channel.send(' Şu anda bot bakımda. Bakım bitince lütfen tekrar deneyiniz. Bakım sebebi : ' + meteyasin)
}
}

client.channels.cache.get("839582135937269861").send(new Discord.MessageEmbed() .setColor("RANDOM") .setThumbnail(message.author.avatarURL({dynamic:true})) 
.setDescription("**Bir Komut Kullanıldı!** \n\n **Komut İsmi** → ``" + cmd.help.name + "`` \n **Kullanan Kişi** → <@"+message.author.id+"> | ``"+client.users.cache.get(message.author.id).tag+"`` \n **Kullanılan Sunucu** → ``"+message.guild.name+"``")
)
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()//
                    .setDescription(`<a:reddetmek:825688868107059201> **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }//
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")//
				message.channel.send({embed})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);

  
}

};

