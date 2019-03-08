const Discord = require('discord.js');

exports.run = function(client, message) {
message.channel.send('**🎉Offline Sayısı**: '+message.guild.members.filter(m => m.user.presence.status === "offline").size).then(async msg => {
setInterval(async()=>{
  msg.edit('**💥Offline olan **kişi sayısı Sayısı: '+message.guild.members.filter(m => m.user.presence.status === "offline").size)
}, 10000)
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['off'],
  permLevel: 0
};

exports.help = {
  name: 'offline',
  description: 'açıklama',
  usage: 'offlind'
};
 
