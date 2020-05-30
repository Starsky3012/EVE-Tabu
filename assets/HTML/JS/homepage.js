function createGame(){
  console.log('The create button was pressed');
  var gamesession = new Date().getTime();
  console.log(gamesession);
  var name = document.getElementById('namefield').value;
  console.log(name);
}
