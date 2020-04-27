/**
Spamming Bot ReMaked By IP#4773 
[+] Anti Banned
[+] next Speed generation
[+] Power full for Each User
================================
      HOW TO USE 
+ Get Each Token and Join to Server Target
+ Remix Or Clone this App
+ 1 Project, 1 Token  [MUST SAME CODE AND PREFIX!!]
+ Paste Token in .env (TOKEN=)

And Happy Spamming :)
don't edit for keep safe

Thx to https://github.com/Nuno135/
**/

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var Discord = require('discord.js');
var bot = new Discord.Client();
var config = require('./prefix.json');
var prefix = config.prefix;
bot.on('message', msg => {
var suffix = msg.content.split(' ').slice(1);
//CMDS
if (msg.content.startsWith(prefix + "help")) {
    var help = suffix[0];
    if (!help) {
    msg.channel.send([
        '```js' + 
        '\nSPECIFIC COMMANDS:' + 
        `\n${prefix}help **spam**` +
        `\n${prefix}help **dspam**` + 
        `\n${prefix}help **pmspam**` + 
        `\n${prefix}help **dpmspam**` + 
        `\n${prefix}help **cspam**` +
        '```'
    ])
    } else {
     if (help === "spam") {
         msg.channel.send([
             '```js\n Mau Spam Apa!.' + 
             `\n${prefix}spam | JMLH | PESAN\`\`\``
         ])
     } else
        //PMSPAM
     if (help === "pmspam") {
         msg.channel.send([
             '```js\nPM Spams Mantan!.' + 
             `\n${prefix}pmspam | @MANTAN | JMLH | PESAN\`\`\``
         ])
     } else
         //DSPAM
      if (help === "dspam") {
          msg.channel.send([
             '```js\nSpam Nembak Cewe abis ntu HApus!' + 
             `\n${prefix}dspam | JMLH | TO SPAM\`\`\``
          ]) 
      } else 
        //DPMSPAM
    if (help === "dpmspam") {
        msg.channel.send([
            '```js\nSpam DM Mantan SeKuy!!!' + 
            `\n${prefix}dpmspam | @MANTAN | JMLH | PESAN\`\`\``
        ])
    } else
        //CHANNEL SPAM
    if (help === "cspam") {
        msg.channel.send([
            '```js\nSpam Kamar Mantan!' + 
            `\n${prefix}cspam | #CHANNEL | JMLH | PESAN\`\`\``
        ])
    }
    }
} else
  
/**
I'am try to make shortly command
**/  
  
//SPAM
    if (msg.content.startsWith(prefix + "spam")) {
    try { var timesRun = 0;
        var numberspam = suffix[0];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(2).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           msg.channel.send(tospam)
           timesRun += 1
           if (timesRun === messagecount) {clearInterval(interval) }}, 1)
       msg.channel.send(interval.length); } catch (err) {
        console.log(err) }} else

//DELETESPAM
    if (msg.content.startsWith(prefix + "dspam")) {
    try { var timesRun = 0;
        var numberspam = suffix[0];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(2).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
         msg.channel.send(tospam).then(m => { m.delete()
           });  timesRun += 1
           if (timesRun === messagecount) {clearInterval(interval)  } }, 1)
       msg.channel.send(interval.length);
        } catch (err) {
        console.log(err) }
        } else
//PM
    if (msg.content.startsWith(prefix + "pmspam")) {
        try { var usertospam = msg.mentions.users.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(3).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() { usertospam.send(tospam)
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval) } }, 1)
       usertospam.send(interval.length);
        } catch (err) {
msg.channel.send("Error, user not found.")
        }
    } else
   //PMDELETE
      if (msg.content.startsWith(prefix + "dpmspam")) {
        try { var usertospam = msg.mentions.users.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(3).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           usertospam.send(tospam).then(m => { m.delete() }); timesRun += 1
           if (timesRun === messagecount) {clearInterval(interval)}}, 1)
       usertospam.send(interval.length);
        } catch (err) {
msg.channel.send("Error, user not found.")
        }
    } else
    //CHANNEL SPAM
    if (msg.content.startsWith(prefix + "cspam")) {
        try {var channel = msg.mentions.channels.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(2).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {bot.channels.get(channel.id).send(tospam);timesRun += 1
           if (timesRun === messagecount) { clearInterval(interval)}}, 1)
      bot.channels.get(channel.id).send(interval.length);
        } catch(err) {
            console.log(err)}
    }
});
bot.login(process.env.TOKEN);

bot.on("ready", async () => {
    console.log(`Logged in as : ${bot.user.tag}`);
    console.log(`${bot.user.username} ready For Spam!`)
});

//UNHANDLED REJECTION
process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
