var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

var app = express();
//set up template engine
app.set('view engine', 'ejs');

app.get('/', function(req, res){
res.sendFile(__dirname + "/assets/HTML/homepage.html");

});
//static files fuer datei-anfragen
app.use('/', express.static(path.join(__dirname,'assets')));

//app.use('/assets', express.static(path.join(__dirname,'assets')));

app.get('/player/:gamesession', function(req, res){
res.send('You just joined game session: ' + req.params.gamesession);

});

app.get('/host/:gamesession', function(req, res){
res.send('You just joined game session: ' + req.params.gamesession);

});
//listening to port
app.listen(3000);
console.log('Now listening to port 3000');
