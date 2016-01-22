import * as sqlite3 from 'sqlite3';
const sqlite3v = sqlite3.verbose();
const db = new sqlite3v.Database('./main.db');

db.serialize(function() {
  db.run('CREATE TABLE IF NOT EXISTS user (' +
    'ID      INTEGER     PRIMARY KEY AUTOINCREMENT,'+
    'NAME    TEXT        NOT NULL, ' +
    'SLACKID TEXT        UNIQUE      NOT NULL);');
});

db.close();
