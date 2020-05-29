var express = require('express');
const path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
res.sendFile(__dirname + "/assets/HTML/homepage.html");

});

app.use('/', express.static(path.join(__dirname,'assets','html')));
//app.use('/assets', express.static(path.join(__dirname,'assets')));

app.get('/player/:gamesession', function(req, res){
res.send('You just joined game session: ' + req.params.gamesession);

});

app.listen(3000);
