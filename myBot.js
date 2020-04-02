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

botRem.on('message', message => {
  if (message.content === 'อือ') {
    message.reply('เออว่าแต่ว่า ชื่อมันก็คล้ายๆยี่ห้อรถเลยเนอะ5555');
  }
});

botRem.on('message', message => {
  if (message.content === 'Can you embed?') {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: botRem.user.username,
      icon_url: botRem.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: botRem.user.avatarURL,
      text: "© Example"
    }
  }
});

botRem.login(process.env.BOT_TOKEN);
