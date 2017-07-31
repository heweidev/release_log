var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

function createTable() {
    const CREAE = 'CREATE TABLE IF NOT EXISTS logs(id INTEGER PRIMARY KEY AUTOINCREMENT, version TEXT NOT NULL, subversion TEXT NOT NULL,'
                + 'url TEXT NOT NULL, hash TEXT NOT NULL, features TEXT NOT NULL, date TEXT NOT NULL);'
    db.run(CREAE);
}

function insert(data) {
    var params = ['version', 'subversion', 'url', 'hash', 'features']
    for (p in params) {
        if (!params[p]) {
            return p + '不能为空';
        }
    }

    //"INSERT INTO logs (VERSION, SUBVERSION, URL, HASH, FEATURES) values('%s', '%s', '%s', '%s', '%s', '%d')";
    var sql = "INSERT INTO logs(version, subversion, url, hash, features, date) values('"
        + data.version + "','"
        + data.subversion + "','"
        + data.url + "','"
        + data.hash + "','"
        + data.features + "','"
        + new Date().toDateString() + "')";

    console.log(sql);
    db.run(sql);

    return 'ok';
}

function init() {
    createTable();
}

function query(callback) {
    db.all('select * from logs;', callback);
}

init();

module.exports = {
    insert: insert,
    query: query
}
