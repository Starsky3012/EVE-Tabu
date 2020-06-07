//warten auf das Laden der DOM um dann das Element per ID zu finden
//checkt ob der Name gesetzt wurde
document.addEventListener('DOMContentLoaded', function(event){
  document.getElementById('form').onsubmit = function(){
    console.log("Ich wurde geclickt");
    return createGame();
  };
  document.getElementById('playerform').onsubmit = function(){
    console.log("Ich wurde geclickt");
    return joinGame();
  }

})




function createGame(){
  if(checkName()){
    document.getElementById('errorMsg').innerHTML="You have to provide a name";
    console.log('Name missing');
    return false;
  }

  console.log('The create button was pressed');
  var gamesession = new Date().getTime();
  console.log(gamesession);
  var name = document.getElementById('namefield').value;
  console.log(name);
}

function joinGame(){
  var errorContainer = "";
  if(checkName()){
    errorContainer += "name";
  }
  if(checkID()){
    errorContainer += "+ID";
  }

  switch(errorContainer){
    case "name":
      document.getElementById('errorMsg').innerHTML="You have to provide a name";
      console.log('Name missing');
      return false;
    case "+ID":
      document.getElementById('errorMsgID').innerHTML="You have to provide a game ID";
      console.log('ID missing');
      return false;

    case "name+ID":
      document.getElementById('errorMsg').innerHTML="You have to provide a name";
      console.log('Name missing');
      document.getElementById('errorMsgID').innerHTML="You have to provide a game ID";
      console.log('ID missing');
      return false;

    default:
      return true;
  }
}
//returns true if empty
function checkName(){
  if(document.getElementById('namefield').value.trim() === ""){
    return true;
  }
}
//returns true if empty
function checkID(){
  if(document.getElementById('sessionfield').value.trim() === ""){
    return true;
  }
}
