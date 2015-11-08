var express = require('express');
var app = express();
var http = require('http');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.get('/', function(req,res){
	res.sendFile('/home.html', {root: __dirname});
});

app.get('/home', function(req,res){
	res.sendFile('/home.html', {root:__dirname});
});

app.get('/about', function(req,res){
	res.sendFile('/about.html', {root:__dirname});
});

app.get('/contact', function(req,res){
	res.sendFile('/contact.html', {root:__dirname});
});

app.get('/partners', function(req,res){
	res.sendFile('/partners.html', {root:__dirname});
});

app.get('/galleries', function(req,res){
	res.sendFile('/galleries.html', {root: __dirname});
});


app.use(express.static('public'));

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});
