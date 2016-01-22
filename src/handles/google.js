import {GoogleCSEApi} from '../apis/GoogleCSEApi.js';
import {subroute} from './subroute.js';
require('isomorphic-fetch');

const matching = {
  'imageme': imageMe,
  'animateme': animateMe,
};

function extractImagesFromJson(json) {
  const items = json.items;
  return items.filter(function(e) {return e.mime != 'image/gif';})
              .map(function(e){return e.link;});
}

function extractGIFsFromJson(json) {
  const items = json.items;
  return items.filter(function(e) {return e.mime == 'image/gif';})
              .map(function(e){return e.link;});
}

function formatLinkToAttachment(url) {
  return {
    "attachments": [
      {
        "fallback": "Error happen",
        "image_url": url,
      }
    ]
  };
}

function imageMe(bot, command) {
  const condition = command.join(" ");
  GoogleCSEApi.getImage(condition).then(function(info) {
    const imgs = extractImagesFromJson(info);
    const img = imgs[Math.floor(Math.random()*imgs.length)];
    bot.postMessageToChannel('general','', formatLinkToAttachment(img));
  });
}

function animateMe(bot, command) {
  const condition = command.join(" ");
  GoogleCSEApi.getAnimate(condition).then(function(info) {
    const imgs = extractGIFsFromJson(info);
    const img = imgs[Math.floor(Math.random()*imgs.length)];
    bot.postMessageToChannel('general','', formatLinkToAttachment(img));
  });
}

exports.route = subroute(matching);
