const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmatador = new Discord.MessageEmbed()

.setColor("BLUE")
.setTitle("**▬▬▬▬▬▬[** <a:tac:774263713501806623> **Eğlence Botu** <a:tac:774263713501806623> **]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** `!!`")
.setThumbnail("")
.setDescription(`

▬▬▬▬▬▬[ <a:tac:774263713501806623> **Eğlence Komutları** <a:tac:774263713501806623> ]▬▬▬▬▬▬

**  !!uzaysavaşı : **Etiketledigin Kişi İle Uzay Savaşı Yaparsınız.
**  !!komik : **Komik Paylaşımlar Atar.
**  !!emojiler : **Sunucunun Emojilerini Gösterir.
**  !!nah-çek : **Etiketledigin Kişiye Nah Çekersin.
**  !!yazan-kazanır : **İlk Yazan Kazanır.
**  !!xox : **Etiketledigin Kişi İle xox Oynarsınız.;
**  !!joker : **Joker Gif Atar.
**  !!yazı-tura :** Bot ile yazı-tura oyununu oynarsınız.
**  !!yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
**  !!öp :** Etiketlediğiniz kişiyi öpmenize yarar.
**  !!şekerye :** Bot size şeker ikram eder.
**  !!doğum-günü : **Etiketledigin Kişinin Dogum Gününü Kutlarsın.
**  !!adamasmaca : **Adamasmaca Oynarsınız.
**  !!randomship : **Bot Otomatik RandomShip 2 Kişiyi Shipler...
**  !!bilek-güreşi : **Etiketledigin Kişi İle Bilek Güreşi Oynarsınız.
**  !!marvelgif : **Marvel Gifleri Atar...
**  !!gay-sayar : ** %? Kaç Gay siniz.
**  !!doğrulukcesaret : **Dogruluk Cesaret Soruları Verir.
**  !!token : **Botun Tokenini Alırsınız.

**▬▬▬▬▬▬▬[** <a:tac:774263713501806623>   **Bilgilendirme** <a:tac:774263713501806623> **]▬▬▬▬▬▬▬**

  <a:B_Yildiz:825644101985894400> **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
  <a:Discord:737981764919754753> **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/k72PR4w)**
  <a:aa:774263704098308136> **Komut hakkında detaylı bilgi için: !!yardım**
  <a:ayar:825679362518417459> **Aktif discord.js sürümüm: v12.2.0**

** <a:Discord:737981764919754753> Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/k72PR4w)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=665515464868233233&permissions=8&scope=bot)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embedmatador)
.then; //MATADOR

};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım2', 
    description: 'The Help Command',
    usage: 'help'
};
