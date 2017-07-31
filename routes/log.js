var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.query(function(err, data){
        if (err) {
            res.send('[]');
        } else {
            res.send(JSON.stringify(data));
        }
    });

    var itemList = [
        {
            version: '1.1',
            hash: 'jfsijief',
            subversion: 'abferfe',
            date: new Date().toDateString(),
            url: 'http://www.baidu.com',
            fetures: [
                'fetures_1', 'fetures_2',
            ]
        },
        {
            version: '1.0',
            hash: 'jfsijief',
            subversion: 'abferfe',
            date: new Date().toDateString(),
            url: 'http://www.baidu.com',
            fetures: [
                'fetures_1', 'fetures_2',
            ]
        },
    ]
    //res.send(JSON.stringify(itemList));
});

module.exports = router;
