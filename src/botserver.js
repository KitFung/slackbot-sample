/**
 * Make it simple since it suppose to be a simple api.
 */
import express from 'express';
var bodyParser = require('body-parser')
import {createBot} from './bot.js';

const app = express();
// const bot = createBot();

app.use(bodyParser.json());

app.get('/msg', function(req, res) {
  const token = req.query.token;
  console.log(token + '     -     ' + process.env.SLACKCOMMANDTOKEN);
  if(token != process.env.SLACKCOMMANDTOKEN) {
    res.status(400).send('Invalid token');
    return;
  }
  const text = 'Msg from direct api - Some one say: ' + req.query.text;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    'response_type': 'ephemeral',
    'text': text,
    'attachments': {
      'text': text,
    },
  }))
  /* You can use the custom bot account to response if you want. */
  // bot.postMessageToChannel('general','', 'Msg from direct api - Some one say: ' + req.body.text);
});

app.listen(process.env.PORT || 3000);
