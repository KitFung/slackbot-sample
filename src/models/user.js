import * as sqlite3 from 'sqlite3';
const sqlite3v = sqlite3.verbose();
const db = new sqlite3v.Database('./main.db');

exports.getAllUser = function() {
  return new Promise(function(resolve, reject) {
    db.all("SELECT * FROM user ORDER BY NAME ASC;", function(err, res) {
      resolve(res.map(function(r) {return r.NAME;}));
    });
  });
}

exports.addUser = function(username, userid) {
  return new Promise(function(resolve, reject) {
    db.serialize(function() {
      var stmt = db.prepare("INSERT INTO user (NAME, SLACKID) VALUES (?, ?)");
      stmt.run([username, userid], function(err) {
        if(err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
}
