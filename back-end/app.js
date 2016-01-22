var express = require('express');
var app = express();
//var db = require('./config/db');
var bodyParse = require('body-parser');
var cors = require('cors');

app.use(cors());

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

/*Hello api*/
app.get('/api', function(req, resp) {
    resp.send('APP !!!');
});

module.exports = app;
