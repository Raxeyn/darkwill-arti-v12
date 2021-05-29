const Discord = require('discord.js');
const { randomRange, verify } = require('../util/Util');
const { stripIndents } = require('common-tags');

exports.run = async (client, msg, args) => {

  this.games = new Set();
  
    this.verifyWin = (sides) => {
        return (sides[0] === sides[1] && sides[0] === sides[2])
            || (sides[0] === sides[3] && sides[0] === sides[6])
            || (sides[3] === sides[4] && sides[3] === sides[5])
            || (sides[1] === sides[4] && sides[1] === sides[7])
            || (sides[6] === sides[7] && sides[6] === sides[8])
            || (sides[2] === sides[5] && sides[2] === sides[8])
            || (sides[0] === sides[4] && sides[0] === sides[8])
            || (sides[2] === sides[4] && sides[2] === sides[6]);
  }
    
  const opponent = msg.mentions.users.first()
  if (!opponent) return msg.channel.send('<a:B_Yildiz:825644101985894400> Geçersiz argüman! `!xox <kullanıcı>`')
  if (opponent.bot) return msg.channel.send('<a:B_Yildiz:825644101985894400> Botlar ile oyun oynyamazsınız!');
        if (opponent.id === msg.author.id) return msg.channel.send('<a:B_Yildiz:825644101985894400> Kendiniz ile oyun oynayamazsınız!');
        if (this.games.has(msg.channel.id)) return msg.channel.send('<a:B_Yildiz:825644101985894400> Kanal başına sadece bir düello meydana gelebilir!');
        this.games.add(msg.channel.id);
        try {
            await msg.channel.send(`<a:B_Yildiz:825644101985894400> ${opponent}, düello'yu kabul ediyor musun?`);
            const verification = await verify(msg.channel, opponent);
            if (!verification) {
                this.games.delete(msg.channel.id);
                return msg.channel.send('Görünüşe göre kabul edilemedi!');
            }
            const sides = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
            const taken = [];
            let userTurn = true;
            let winner = null;
            while (!winner && taken.length < 9) {
                const user = userTurn ? msg.author : opponent;
                const sign = userTurn ? 'X' : 'O';
                await msg.channel.send(stripIndents`
                    ${user}, hangi tarafı almak istersin? (Kullanım İçin 1 Sayı Giriş Yapmanız Gerekiyor.)
                    \`\`\`
                    ${sides[0]} | ${sides[1]} | ${sides[2]}
                    —————————
                    ${sides[3]} | ${sides[4]} | ${sides[5]}
                    —————————
                    ${sides[6]} | ${sides[7]} | ${sides[8]}
                    \`\`\`
                `);
                const filter = res => {
                    const choice = res.content;
                    return res.author.id === user.id && sides.includes(choice) && !taken.includes(choice);
                };
                const turn = await msg.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000
                });
                if (!turn.size) {
                    await msg.channel.send('Üzgünüm, zaman doldu!');
                    userTurn = !userTurn;
                    continue;
                }
                const choice = turn.first().content;
                sides[Number.parseInt(choice, 10)] = sign;
                taken.push(choice);
                if (this.verifyWin(sides)) winner = userTurn ? msg.author : opponent;
                userTurn = !userTurn;
            }
            this.games.delete(msg.channel.id);
            return msg.channel.send(winner ? `Oyun bitti! Tebrikler, <a:tac:774263713501806623> **${winner}** kazandı!` : 'Oh... Hiçkimse kazanamadı.');
        } catch (err) {
            this.games.delete(msg.channel.id);
            throw err;
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  permLevel: `Yetki gerekmiyor.`
}

exports.help = {
    name: 'xox',
    usage: ''
}
