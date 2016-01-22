import * as user from './user.js';
import * as google from './google.js';
import * as wiki from './wiki.js';
import * as hackernews from './hackerNews.js';

const routeHandlerMatching = {
  'echo': echo,
  'user': user.route,
  'google': google.route,
  'wiki': wiki.route,
  'hackernews': hackernews.route,
};

const routeRewrite = {
  'imageme': ['google', 'imageme'],
  'animateme': ['google', 'animateme'],
  'wikime': ['wiki', 'wikime'],
};

function echo(bot, command) {
  bot.postMessageToChannel('general',command.join(" "));
};

exports.handleRoute = function(bot, command, user) {
  let nextLevel = command.shift();
  if (nextLevel in routeRewrite) {
      command = routeRewrite[nextLevel].concat(command);
      nextLevel = command.shift();
  }
  if(nextLevel in routeHandlerMatching) {
    routeHandlerMatching[nextLevel](bot, command, user);
  }
}
