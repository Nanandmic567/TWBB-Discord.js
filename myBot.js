//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();
const config = require('./config.json');

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('Rem ready!');
});

botRem.music = require("discord.js-musicbot-addon");
botRem.music.start(botRem, {
	youtubeKey: "AIzaSyDYuk0Wf9wg9kYVKZVA9BTONoQKDRvxZlU"
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('ถึงยังไงเรมก็รักสุบารุค่ะ');
  }
});

//SuperValentine?!?!
botRem.on('message', message => {
  if (message.content === 'ฉันรักเอมิเลีย... แต่ครั้งนี้ขอแบบซุเปอร์วาเลนไทน์นะ') {
    message.reply('เรมค่ะ เรมค่ะ หนูชื่อเรม มากับเอมและก็สุบารุ... พอใจยัง?');
  }
});

botRem.on('message', message => {
  if (message.content === 'คิดผิดมั้ยพี่?') {
    message.reply('ผิดตั้งแต่น้องเรมเข้าสิงพี่ละ....');
  }
});

botRem.on('message', message => {
  if (message.content === 'เทสอีกรอบนะพี่') {
    message.reply('จ้ะพ่อคุ๊ณณณณ....');
  }
});

botRem.on('message', message => {
  if (message.content === 'อือ') {
    message.reply('เออว่าแต่ว่า ชื่อมันก็คล้ายๆยี่ห้อรถเลยเนอะ5555');
  }
});

botRem.on('message', message => {
  if (message.content === 'wow') {
    message.reply('my god...');
  }
});

//botRem.on('message', message => {
//  if (message.content === 'Can you embed?') {
//    message.channel.send({embed: {
//    color: 3447003,
//    description: "A very simple Embed!"
//  }
//});

// Simple basic response.
botRem.on('message', message => {
  if (message.content === 'Hi') {
    message.reply('อ๋าาาาาา');
  }
});


botRem.login(process.env.BOT_TOKEN);
