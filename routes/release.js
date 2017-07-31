var express = require('express');
var router = express.Router();
var url = require('url');
var db = require('./db')

router.get('/', function(req, res, next) {
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  var ret = db.insert(myUrl.query);
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
  res.end(ret);
});

module.exports = router;