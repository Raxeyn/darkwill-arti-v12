const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [day], H [hour], m [minute], s [second]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("There is bot statistics", bot.user.avatarURL())
    .addField(
      "» **<a:tac:774263713501806623> Ram usage**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField("» **<a:tac:774263713501806623> Worktime**", seksizaman)
    .addField(
      "» **<a:tac:774263713501806623> Users**",
      bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField("» **<a:tac:774263713501806623> Servers**", bot.guilds.cache.size.toLocaleString(), true)
    .addField("» **<a:tac:774263713501806623> Discord.JS **", "v" + Discord.version, true)
    .addField("» **<a:tac:774263713501806623> Node.JS **", `${process.version}`, true)
    .addField("» **<a:tac:774263713501806623> Ping**", bot.ws.ping + " ms", true)
    .addField(
      "» **<a:tac:774263713501806623> CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **<a:tac:774263713501806623> Bit**", `\`${os.arch()}\``, true)
    .addField('<a:developer:837990618667548682> Producer', '<@353541933261520907> | Darkwill +')
        .addField("**<a:Discord:737981764919754753> Links**", "[İnvite Bot](https://discord.com/api/oauth2/authorize?client_id=665515464868233233&permissions=8&scope=bot)\n[Support Server](https://discord.gg/mFc2n6F)\n[Vote Page](https://www.rvsbotlist.xyz/bot/665515464868233233)") 
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["statistics", "botbilgi", "i",'istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
