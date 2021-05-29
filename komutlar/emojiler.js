const Discord = require("discord.js");

exports.run = async (client, message) => {

var page = 0;
  
let arr = [];
let emojiarr = message.guild.emojis.cache.array();

for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*10 +1); ++i) {//kafami sktm birda
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}
//console.log(arr)
let embd = new Discord.MessageEmbed()
message.channel.send(embd.setDescription(arr[0]).setFooter(`Sayfa ${page+1} / ${arr.length+1}`)).then(async msg => {
      await msg.react("⬅️");
      await msg.react("➡️");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "⬅️":
            reaction.users.remove(user).catch(console.error);
            if (page == 0) return;
            --page

              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription(arr[page])
            msg.edit(embd)
           break;
          case "➡️":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription(arr[page] || "Bulunamadi")
            msg.edit(embd)
          break;

        }
      });

})
}
exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "emojiler"
};
