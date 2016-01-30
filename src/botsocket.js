import {handleRoute} from './handles/main.js';
import {createBot} from './bot.js';

const bot = createBot();

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
});
