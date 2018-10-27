let readline = require("readline-sync");

const input = function(message) {
  let intake = readline.question(message);
  return intake;
}


const whichPlayer = function (chance,player1,player2) {
  playerInfo = {player : player1,symbol : "X"};
  if(chance % 2 != 0) {
    playerInfo = {player : player2,symbol : "O"};
  }
  return playerInfo;
}

const changePlayer = function(allArguments) {
  let {numbers,index,array,chance,assurance,playerInfo} = allArguments;
  let {player,symbol} = playerInfo;
  switch(!assurance.includes(index) && numbers.includes(index)) {
    case true :
      array[index] = symbol;
      console.clear();
      console.log(builtGame(array));
      assurance.push(index);
      if(hasWon(array,array[index])){
        console.log(player+" wins the Game..COUGRATULATIONS....!");
        return "Game Over";
      }
      break;
    case false :
      chance--;
      console.log("the Block is already taken or invalid number entered try again..")
      break;
  }
  return chance;
}

const runGame = function(player1,player2) { 
  let array = new Array(10).fill(" ");
  let assurance = [];
  let numbers = [1,2,3,4,5,6,7,8,9];
  for(let chance = 0; chance < 9;chance++) {
    let playerInfo = whichPlayer(chance,player1,player2);
    let index = +input("Enter a number "+playerInfo.player+"   :  ");
    let allArguments = {playerInfo,array,assurance,numbers,chance,index};
    let msg = changePlayer(allArguments);
    if(msg == "Game Over") {
      return "Game Over";
    }
    chance = msg;
  }
  return "OPPS !! Game Draw....";
}

const hasWon = function(array,symbol) {
  let winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  let winStatus = winningArray.some(function(elementArray){let msg = elementArray.every(function(element){return array[element] == symbol;});return msg;})
  return winStatus == true;
}

const builtGame = function(array) {
  let patternArray = [];
  patternArray[0] = array[1]+"|"+array[2]+"|"+array[3];
  patternArray[1] = "-+-+-";
  patternArray[2] = array[4]+"|"+array[5]+"|"+array[6];
  patternArray[3] = "-+-+-";
  patternArray[4] = array[7]+"|"+array[8]+"|"+array[9];
  return patternArray.join("\n");
}

const main = function() {
console.log("-----------------------Welcome to the Game-----------------------------");
input("Press any key to begin..");
let player1 = input("Enter Player - 1 Name :  ");
let player2 = input("Enter Player - 2 Name :  ");
console.log(player1+"'s symbol : X ");
console.log(player2+"'s symbol : O ");
console.log(runGame(player1,player2));
}

main();
