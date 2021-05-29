const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor(0x36393e)
    .setAuthor(`Darkwill Bot`, client.user.avatarURL())
    .setThumbnail('https://i.gifer.com/tA.gif')
    .addField("<a:Discord:737981764919754753> Linkler", `Destek Sunucusu [TIKLA](https://discord.gg/4v8faVc)`)
    .addField("<a:Discord:737981764919754753> Website", `Vote [TIKLA](https://darkwill.glitch.me/)`)
    .addField("<a:Discord:737981764919754753> Darkwill +", `Davet [TIKLA](https://discord.com/api/oauth2/authorize?client_id=665515464868233233&permissions=8&scope=bot)`)
    .addField("<a:Discord:737981764919754753> Darkwill", `Davet [TIKLA](https://discordapp.com/oauth2/authorize?client_id=616282328905416727&scope=bot&permissions=2146958847)`)
    .addField("<a:Discord:737981764919754753> Darkwill Ekonomi", `Davet [TIKLA](https://discord.com/api/oauth2/authorize?client_id=665476501457731615&permissions=8&scope=bot)`)    
    .setFooter(
      `${message.author.username} tarafından istendi. |`,
      message.author.avatarURL()
    );
  return message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "yardım",
  usage: "yardım"
};
