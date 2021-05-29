const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "matador");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

//
client.on("guildCreate", guild => {
  let kanal = client.channels.cache.find(r => r.id === "830846272109150298")
  const roles = guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
  let giriş = new Discord.MessageEmbed()
  .setColor("BLUE")
   .setTitle(`${guild.name} Adlı sunucuya eklendim!`)
   .setDescription(`
   ● **Sunucu Adı** => ${guild.name}
   ● **Sunucu ID** => ${guild.id}
   ● **Sunucu Üye Sayısı** => ${guild.memberCount}
   ● **Sunucu Sahip Bilgileri** => İD: ${guild.ownerID} - İsim: ${guild.owner} - Ad: ${guild.owner.user.tag}
   ● **Sunucu Bölgesi** => ${guild.region}
   ● **Sunucu Kurulum Tarihi** =>  ${moment(guild.createdTimestamp).format('LT')} ${moment(guild.createdTimestamp).format('LL')} ${moment(guild.createdTimestamp).fromNow()}
   ● **Sunucu Üye Bilgileri** => Bot Sayısı: ${guild.members.cache.filter(member => member.user.bot).size} - Normal Üye Sayısı: ${guild.members.cache.filter(member => !member.user.bot).size} - Aktif Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'online').size} - Kapalı Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'offline').size} - Boştaki Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'idle').size} - Rahatsız Etmeyindeki Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'dnd').size}
   ● **Sunucuyla Alakalı Diğer Bilgiler** => Rol Sayısı: ${guild.roles.cache.size} - Emoji Sayısı: ${guild.emojis.cache.size} - Kanal Sayısı: ${guild.channels.cache.filter(channel => channel.type === 'text').size} - Sesli Kanal Sayısı: ${guild.channels.cache.filter(channel => channel.type === 'voice').size} - Boost Sayısı: ${guild.premiumSubscriptionCount || 'Sunucuya Boost Basılmamış!'} - Boost Seviyesi: ${guild.premiumTier ? `Seviye ${guild.premiumTier}` : 'Sunucuya Boost Basılmamış!'}
   ● Toplamda: **${guild.memberCount}** kullanıcı bünyemize katıldı!
   ● Sunucu Sayım: **${client.guilds.cache.size}** - Kullanıcı Sayım: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
   `)
   .setFooter(client.user.username, client.user.avatarURL())
   kanal.send(giriş).catch(console.error);
});

client.on("guildDelete", guild => {
 let kanal = client.channels.cache.find(r => r.id === "830846272109150298")
 let çıkış = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTitle(`${guild.name} Adlı sunucudan atıldım!`)
   .setDescription(`
   ● **Sunucu Adı** => ${guild.name}
   ● **Sunucu ID** => ${guild.id}
   ● **Sunucu Üye Sayısı** => ${guild.memberCount}
   ● **Sunucu Sahip Bilgileri** => İD: ${guild.ownerID} - İsim: ${guild.owner} - Ad: ${guild.owner.user.tag}
   ● **Sunucu Bölgesi** => ${guild.region}
   ● **Sunucu Kurulum Tarihi** =>  ${moment(guild.createdTimestamp).format('LT')} ${moment(guild.createdTimestamp).format('LL')} ${moment(guild.createdTimestamp).fromNow()}
   ● **Sunucu Üye Bilgileri** => Bot Sayısı: ${guild.members.cache.filter(member => member.user.bot).size} - Normal Üye Sayısı: ${guild.members.cache.filter(member => !member.user.bot).size} - Aktif Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'online').size} - Kapalı Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'offline').size} - Boştaki Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'idle').size} - Rahatsız Etmeyindeki Üye Sayısı: ${guild.members.cache.filter(member => member.presence.status === 'dnd').size}
   ● **Sunucuyla Alakalı Diğer Bilgiler** => Rol Sayısı: ${guild.roles.cache.size} - Emoji Sayısı: ${guild.emojis.cache.size} - Kanal Sayısı: ${guild.channels.cache.filter(channel => channel.type === 'text').size} - Sesli Kanal Sayısı: ${guild.channels.cache.filter(channel => channel.type === 'voice').size} - Boost Sayısı: ${guild.premiumSubscriptionCount || 'Sunucuya Boost Basılmamış!'} - Boost Seviyesi: ${guild.premiumTier ? `Seviye ${guild.premiumTier}` : 'Sunucuya Boost Basılmamış!'}
   ● Toplamda: **${guild.memberCount}** kullanıcı eksildi!
   ● Sunucu Sayım: **${client.guilds.cache.size}** - Kullanıcı Sayım: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
   `)
   .setFooter(client.user.username, client.user.avatarURL())
 kanal.send(çıkış).catch(console.error);
});

client.on("message", message => {
if(message.channel.id == "830857758860771388") { 
message.react("839582672375644220")
}
})
