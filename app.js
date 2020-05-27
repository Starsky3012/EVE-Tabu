var express = require('express');

var app = express();

app.get('/', function(req, res){
res.send('this is the homepage');

});

app.get('/player/:gamesession', function(req, res){
res.send('You just joined game session: ' + req.params.gamesession);

});

app.listen(3000);
