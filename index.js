var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var path = require('path');
const fs = require('fs');

var app = express();

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/images'));

app.get('/', function(request, response) {
	const cookies = request.headers.cookie;
	console.log(cookies);
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/eng', function(request, response) {
	response.sendFile(path.join(__dirname + '/landing_eng.html'))
});

app.post('/vie', function(request, response) {
	response.sendFile(path.join(__dirname + '/landing_viet.html'))
});

app.listen(3000);
