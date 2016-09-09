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
    res.render("index", {
    	title: "Portfolio",
    	page: "home"
    });
});

app.get('/code', function(req, res) {
    res.render("code", {
    	title: "Code Examples",
    	page: "code"
    });
});

app.get('/work', function(req, res) {
    res.render("work", {
    	title: "Past Work",
    	page: "work"
    });
});

app.get('/resume', function(req, res) {
    res.render("resume", {
    	title: "Resume",
    	page: "resume"
    });
});

app.get('/about', function(req, res) {
    res.render("about", {
    	title: "About Me",
    	page: "about"
    });
});

app.get('/contact', function(req, res) {
    res.render("contact", {
    	title: "Contact Me",
    	page: "contact"
    });
});

var server = app.listen(process.env.PORT || 8000, function() {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);