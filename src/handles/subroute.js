exports.subroute = function(matching) { 
  return function(bot, command, user) {
    const nextLevel = command.shift();
    if(nextLevel in matching) {
      matching[nextLevel](bot, command, user);
    }
  };
}
