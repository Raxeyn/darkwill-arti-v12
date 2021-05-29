const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmatador = new Discord.MessageEmbed()

.setColor("BLUE")
.setTitle("**▬▬▬▬▬▬[** <a:tac:774263713501806623> **Eğlence Botu** <a:tac:774263713501806623> **]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** `!!`")
.setThumbnail("")
.setDescription(`

▬▬▬▬▬▬[ <a:tac:774263713501806623> **Eğlence Komutları** <a:tac:774263713501806623> ]▬▬▬▬▬▬

**  !!fbi :** FBİ gifi atar.
**  !!aşkölçer :** Aşkınızı ölçer. 
**  !!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
**  !!ara155 :** Polisi aramanıza yarar.
**  !!ay :** Ay gifi atar.
**  !!balık-tut :** Denizde balık tutarsınız.
**  !!beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
**  !!dünya :** Dünya gifi atar.
**  !!ejderha-yazı :** Ejderha temalı logo üretirsiniz.
**  !!emojiyazı :** Yazdığınız yazıları emoji halinde yazar.
**  !!espri :** Bot sizin için espri yapar.
**  !!hesapla :** Belirttiğiniz matematik işlemini bot yapar.
**  !!fal :** fal bakarsınız.
**  !!1v1 :** Düello Atarsınız.
**  !!alkış :** Alkışlarsınız.
**  !!kaç-cm :** Bot malafat uzunluğunuzu söyler.
**  !!kralol :** Kral olmanıza yarar.
**  !!slots :** Slot oynarsınız.
**  !!sarıl :** Etiketlediginiz Kişiye Sarılırsınız.
**  !!taksimdayı :** Taksim Dayı gifi atar.
**  !!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
**  !!sesegir : **İd Koydugunuz Sesli Kanala Giriş Yapar Bot.
**  !!yardım2 : **Yardım Menüsü 2. Sayfası.
**  !!destek-ekibi-çağır : **Destek Ekibini Çağırırsınız.

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
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};
