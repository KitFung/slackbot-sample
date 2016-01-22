import {HackerNewsApi} from '../apis/HackerNewsApi.js';
import {subroute} from './subroute.js';

const matching = {
  'top': getTopItems,
  'get': getSpecificItems,
};

function formatJsonToAttachment(json) {
  return {
    "attachments": [
      {
        "fallback": "Error happen",
        "title": json.title,
        "title_link": json.url,
        "text": `${json.score} points by ${json.by} ${new Date(json.time*1000).toLocaleString()} | ${json.descendants} comments`,
        "color": "#FFA31A",
      }
    ]
  };
}

function getTopItems(bot, command) {
  let topN = 1;
  if(command.length == 1)
    topN = command[0];
  const request = HackerNewsApi.getTop100ItemsId().then(function(res) {
    return HackerNewsApi.getItemsById(res[topN - 1]);
  }).then(function(res) {
    bot.postMessageToChannel('general','', formatJsonToAttachment(res));
  });
}

function getSpecificItems(bot, command) {
  if (command.length < 1) return;
  let id = command[0];
  const request = HackerNewsApi.getItemsById(id).then(function(res) {
    return res.json();
  }).then(function(res) {
    bot.postMessageToChannel('general','', formatJsonToAttachment(res));
  });
}

exports.route = subroute(matching);
