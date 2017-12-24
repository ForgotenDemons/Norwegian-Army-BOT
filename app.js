const Discord = require(`discord.js`)
const moment = require(`moment`)
const bot = new Discord.Client();
const prefix = '-';

bot.on('ready', () => {
 console.log('Bot launched.....');
 bot.user.setGame('-help');
});

bot.on('message', message => {
let msg = message.content.toUpperCase();
let sender = message.author;
let args = message.content.split(" ").slice(1);

if(msg === prefix + 'PING') {
message.channel.send('The bot Ping have -108 ms');
}else if(msg === prefix + "BOTINFO"){
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    const cpu = process.cpuUsage().system / 1024 / 1024;
    const duration = moment(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]')
    let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .addField('Uptime', duration, true)
        .addField('CPU', Math.round(cpu * 100) + '%', true)
        .addField('Ram', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB', true)
        .addField('Guilds', bot.guilds.size, true)
        .addField('Users', bot.users.size.toLocaleString(), true)
        .addField('Developer', '@ForgotenDemons#5375  ', true)
        .addField('Library', 'https://discord.js.org/#/', true)
        .addField('Version', Discord.version, true)
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor("RANDOM");
    message.channel.send({ embed: embed });
   return;
}

  else if(msg === prefix + 'HELP') {
    const help = new Discord.RichEmbed()
    .setTitle('Commands')
    .setDescription('This is the list of commands')
    .addField('Utilities', 'botinfo, purge ')
    .addField('Fun', 'ping, say, invite ')
    .addField('Tryout', 'HGTRYOUT, FSKRTYOUT, CDFTRYOUT, FOB, TDM,')
    .setColor('#008000');
      message.channel.send({embed: help});
     return;
}
     else if(message.content.startsWith(prefix + 'say')) {
   message.delete(message.member.lastMessage);
   message.channel.send(args.join(" "));
}
     if(msg === prefix + 'INVITE') {
     message.channel.send('https://discord.gg/8U5V6Yc');
}
     if(msg === prefix + 'NONSTOPEVENT') {
     message.channel.send('@everyone NONSTOPEVENT at the academy Come for a posible promotion https://web.roblox.com/games/1256144054/NA-Asker-Academy-V1#');
}
else if(msg === prefix + 'USERINFO') {
let usrinfo = new Discord.RichEmbed()
.setAuthor(message.author.username + '#' + message.author.discriminator, message.author.displayAvatarURL, message.author.avatarURL)
.setColor('#FF0000')
.addField('Status', message.author.presence.status)
.addField('Registered', message.author.createdAt)
.addField('Joined Server', message.guild.joinedAt);
message.channel.send({embed: usrinfo});
return;
}
if(msg === prefix + 'HGTRYOUT') {
message.channel.send('@everyone Home Guard Tryout at academy come for a chance to be an Home Guard ONLY LCPL+  https://web.roblox.com/games/1256144054/NA-Asker-Academy-V1#');
}
if(msg === prefix + 'FSKTRYOUT') {
message.channel.send('@everyone FSK Tryout at academy come for a chance to be an Forsvarets Spesialkommando https://web.roblox.com/games/1256144054/NA-Asker-Academy-V1#');
}
if(msg === prefix + 'CDFTRYOUT') {
message.channel.send('@everyone Wanna be join the Elite Regiment Come now to academy for a chance to be an Cyber Defence Force https://web.roblox.com/games/1256144054/NA-Asker-Academy-V1#');
}
if(msg === prefix + 'MEETING') {
message.channel.send('@everyone Meeting at academy all HRS Come to academy ONLY HRS https://web.roblox.com/games/1256144054/NA-Asker-Academy-V1#');
}
if(msg === prefix + 'FOB') {
message.channel.send('COMING SOON');
}
if(msg === prefix + 'TDM') {
message.channel.send('COMING SOON')
}
if (msg.startsWith(prefix + 'PURGE')) {

    async function purge() {
        message.delete();


        if (!message.member.roles.find("name", "owner")) {
            message.reply('You need the \`Adminastrator\` role to use this command.');
            return;
        }


        if (isNaN(args[0])) {

            message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');

            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]});
        message.channel.send(fetched.size + ' messages found, and deleted.');
        message.delete()


        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
    }


    purge();
}
if (message.channel.id === '392898148634198017')
        if (isNaN(message.content)) {
            message.delete()
            message.author.send("You are now Verify You can chat now on Global chat")
}
if(msg === prefix + 'VERIFY') {
let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!info) return message.channel.sendMessage("You did not specify a user Mention");
      let member = message.mentions.members.first();
      let mention = message.mentions.users.first();
var role = member.guild.roles.find('name', 'Verified');
member.addrole(role)
}




});



bot.login('MzkzOTg3NTc1MTk2NTQ5MTMw.DR9xTg.ovf2No5Gpq_9behGgZjYWTswVO0')
