var express = require("express");
var path = require("path");
var app = express();
var moment = require('moment');

app.use(express.static(path.join(__dirname, "/static")));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/static', express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});

var server = app.listen(process.env.PORT || 8000, function() {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);