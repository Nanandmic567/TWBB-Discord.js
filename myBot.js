//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('Rem ready!');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('ถึงยังไงเรมก็รักสุบารุค่ะ');
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

botRem.login(process.env.NjMwNjIzNjE2OTQ5NTUxMTM1.XoMpAA.PTTIbLPEuxA4lIkMioz9e3-gMrM);
