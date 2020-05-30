function createGame(){
  if(checkName()){
    document.getElementById('errorMsg').innerHTML="You have to provide a name";
    console.log('Name missing');
    return;
  }

  console.log('The create button was pressed');
  var gamesession = new Date().getTime();
  console.log(gamesession);
  var name = document.getElementById('namefield').value;
  console.log(name);
}

function joinGame(){
  if(checkName()){
    document.getElementById('errorMsg').innerHTML="You have to provide a name";
    console.log('Name missing');
    return;
  }
  if(checkID()){
    document.getElementById('errorMsgID').innerHTML="You have to provide a game ID";
    console.log('ID missing');
    return;
  }
}

function checkName(){
  if(document.getElementById('namefield').value.trim() === ""){
    return true;
  }
}

function checkID(){
  if(document.getElementById('sessionfield').value.trim() === ""){
    return true;
  }
}
