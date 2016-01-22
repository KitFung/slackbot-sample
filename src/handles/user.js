import * as userModel from '../models/user.js';
import {subroute} from './subroute.js';

const matching = {
  'list': listAllUser,
  'add': addUser,
};

function listAllUser(bot, command, user) {
  const result = userModel.getAllUser();
  result.then(function(rows) {
    bot.postMessageToChannel('general', rows.join('\n'));
  });
}

function addUser(bot, command, user) {
  if(command.length !== 2) {
    bot.postMessageToChannel('general', 'Invalid number of arguments. Example: helloworld user add name id');
  } else {
    const result = userModel.addUser(command[0], command[1]);
    result.then(function (){
      bot.postMessageToChannel('general', "Sucessfully added.");
    },function(err) {
      bot.postMessageToChannel('general', err);
    })
  }
}

exports.route = subroute(matching);
