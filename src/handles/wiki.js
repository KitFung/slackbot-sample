import {subroute} from './subroute.js';
import {WikiApis} from '../apis/WikiApis.js';
require('isomorphic-fetch');

const matching = {
  'wikime': wikiMe,
};

function formatArrayToAttachment(arr) {
  if(arr[1].length != 0) {
    return {
      "attachments": [
        {
          "fallback": "Error happen",
          "title": arr[1][0],
          "title_link": arr[3][0],
          "text": arr[2][0],
          "color": "#7CD197",
        }
      ]
    };
  }

  return {
    "attachments": [
      {
        "fallback": "Error happen",
        "title": arr[0],
        "text": "Result not found",
        "color": "#F6CECE",
      }
    ]
  };
}

function wikiMe(bot, command) {
  const condition = command.join(" ");
  WikiApis.getFirstResult(condition).then(function(arr) {
    bot.postMessageToChannel('general','', formatArrayToAttachment(arr));
  });
}

exports.route = subroute(matching);
