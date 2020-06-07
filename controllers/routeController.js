//bodyParser einbinden
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

//dummy-data
var data = {"name": "Dummy-name"};

module.exports = function(app){
  //routing fuer die homepage
  app.get('/', function(req, res){
  res.render('homepage.ejs')

  });

  app.get('/gamemaster/:sessionID', function(req, res){
  res.render('gamemaster.ejs', {user: data});

  });
  //route zum testen
  app.post('/gamemaster', function(req, res){
  res.render('gamemaster.ejs', {user: data});

  });
  //route zum testen
  app.post('/player', function(req, res){
  res.render('player.ejs', {user: data});

  });

  //handler fuer das starten eines Spiels

  app.post('/', urlencodedParser, function(req, res){
    console.log(req.body);
  });

}
