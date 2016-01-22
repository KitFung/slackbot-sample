import {handleRoute} from './handles/main.js';

const SlackBot = require('slackbots');
const bot = new SlackBot({
  token: process.env.SLACKBOTTOKERN, // Add a bot https://my.slack.com/services/new/bot and put the token 
  name: process.env.SLACKBOTNAME,
});

bot.on('start', function() {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'Hello World!');
});

bot.on('message',function(data) {
    if(data.type == 'message') {
        const textSplit = data.text.split(' ');
        if(textSplit.length >= 2 && textSplit.shift() == 'helloworld') {
            handleRoute(bot, textSplit, data.user);
        }
    }
})