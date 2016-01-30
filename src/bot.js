import SlackBot from 'slackbots';

export function createBot() {
  return new SlackBot({
    token: process.env.SLACKBOTTOKERN, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: process.env.SLACKBOTNAME,
  });
};
