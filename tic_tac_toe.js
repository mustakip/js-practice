let readline = require("readline-sync");

const input = function(message) {
  let intake = readline.question(message);
  return intake;
}


const chooseSymbol = function(chance) {
  symbol = "X";
  if(chance % 2 != 0) {
    symbol = "O";
  }
  return symbol;
}

const whosTurn = function(chance,player1,player2) {
  player = player1;
  if(chance % 2 != 0) {
    player = player2;
  }
  return player;
}

const runGame = function(player1,player2) { 
  let array = new Array(10).fill(" ");
  let assurance = [];
  let numbers = [1,2,3,4,5,6,7,8,9];
  for(let chance = 0; chance < 9;chance++) {
    let index = +input("Enter a number "+whosTurn(chance,player1,player2)+"   :  ");
    switch(!assurance.includes(index) && numbers.includes(index)) {
      case true :
        array[index] = chooseSymbol(chance);
        console.clear();
        console.log(builtGame(array));
        assurance.push(index);
        if(hasWon(array,array[index])){
          console.log(whosTurn(chance,player1,player2)+" wins the Game..COUGRATULATIONS....!");
          return "Game Over";
        }
        break;
      case false :
        chance--;
        console.log("the Block is already takenor invalid number entered try again..")
        break;
    }
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
