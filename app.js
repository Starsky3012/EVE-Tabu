var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var routeController = require('./controllers/routeController');

var app = express();
//set up template engine
app.set('view engine', 'ejs');


//static files fuer datei-anfragen
app.use('/', express.static(path.join(__dirname,'assets')));

routeController(app);

//listening to port
app.listen(3000);
console.log('Now listening to port 3000');
