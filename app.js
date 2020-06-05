var express = require('express');
const path = require('path');
var socket = require('socket.io');
var routeController = require('./controllers/routeController');

var app = express();
var server = app.listen(3000, function(){
  console.log('Now listening to port 3000');
});

//set up template engine
app.set('view engine', 'ejs');


//static files fuer datei-anfragen
app.use('/', express.static(path.join(__dirname,'assets')));

routeController(app);

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection');

})
