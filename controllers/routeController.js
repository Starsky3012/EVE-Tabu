module.exports = function(app){

  app.get('/', function(req, res){
  res.render('homepage.ejs')

  });

  app.get('/:sessionID/gamemaster', function(req, res){
  res.render('gamemaster.ejs')

  });

}