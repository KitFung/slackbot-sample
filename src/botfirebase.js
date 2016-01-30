import Firebase from 'firebase';
import {createBot} from './bot.js';

const bot = createBot();
const firebaseRef = new Firebase(process.env.FIREBASEURL);

firebaseRef.on('child_added', function(snapchat, prevChildKey) {
  var newMsg = snapchat.val();
  bot.postMessageToChannel('general','Msg from firebase - Some one say: ' + newMsg);
});
 