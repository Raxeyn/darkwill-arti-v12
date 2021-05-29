// CodEming 

const Discord = require("discord.js");
exports.run = async (codEming, cmessage, Codeming) => {

let CodEming1 = cmessage.guild.members.cache.filter(ce => !ce.user.bot).random()
let CodEming2 = cmessage.guild.members.cache.filter(ce => ce.id !== CodEming1.id && !ce.user.bot).random()
let CodEmingAşk = ["Her yüreğin harcı değildir dokunmadan sevmek.","Bir umutla beklediğim en güzel yarınsın.","Aşk senin gülüşünde saklı…",
"Tam güldüğün yerde başlar şiirler." ,"Sen mi? Alırım bir ömür." ,"Seni sevmek için o kadar çok sebebim var ki… Sebepleri say desen haftalarca sürer sayamam.",
"Kanatlarım yok belki ama senin varlığının verdiği mutluluk ile göklerde uçuyorum."]
let CeCümle = CodEmingAşk[Math.floor(Math.random()*CodEmingAşk.length)] //Daha fazla cümle için arrayın içine "cümle" şeklinde ekleyebilirsiniz ^^ 
let CeAşkOran = Math.floor(Math.random() * 30) + 70
let CodEmingEmbed = new Discord.MessageEmbed()
.setTitle('<a:kalp:839582672375644220> Yeni Bir Aşk! <a:kalp:839582672375644220>')
.setDescription(`\n\n${CodEming1} <a:kalp:839582672375644220> ${CodEming2} İşte yüzdelik aşk diliminiz!! **%${CeAşkOran}**  💕 \n\n\`\`\`\n${CeCümle}\n\`\`\``) 
.setThumbnail("https://s8.gifyu.com/images/350dbbb67a4af512f06339db8e239159-45d26ecef48d71a5f.gif")
.setColor('RANDOM')
.setFooter(codEming.user.username)
.setTimestamp()

cmessage.channel.send(`Birbirine en uygun 2 kişiyi arıyorum<a:yklenme:825679011920216084>`).then(m =>{
setTimeout(k => m.edit(' ',CodEmingEmbed)
,2000)})
}
  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'randomship',
  description: '',
  usage: ''
}
