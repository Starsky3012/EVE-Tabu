var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
res.sendFile(__dirname + "/HTML/homepage.html");

});

app.get('/player/:gamesession', function(req, res){
res.send('You just joined game session: ' + req.params.gamesession);

});

app.listen(3000);
