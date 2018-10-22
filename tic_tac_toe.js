let readline = require("readline-sync");

const input = function(message) {
  let intake = readline.question(message);
  return intake;
}

console.log("-----------------------Welcome to the Game-----------------------------");
input();
let player1 = input("Enter Player - 1 Name :  ");
let player2 = input("Enter Player - 2 Name :  ");
console.log(player1+"'s symbol : x ");
console.log(player2+"'s symbol : o ");

const chooseSymbol = function(chance) {
  symbol = "x";
  if(chance % 2 != 0) {
    symbol = "o";
  }
  return symbol;
}

const whosTurn = function(chance) {
  player = player1;
  if(chance % 2 != 0) {
    player = player2;
  }
  return player;
}

const runGame = function() { 
  let array = new Array(10).fill(" ");
  let assurance = [];
  for(let chance = 0; chance < 9;chance++) {
    let index = input("Enter a number "+whosTurn(chance)+"   :  ");
    if(!assurance.includes(index)) {
      array[index] = chooseSymbol(chance);
      console.log(assembleSetup(array));
      assurance.push(index);
      if(checkWin(array,array[index]) == true ){
        console.log(whosTurn(chance)+" wins the Game..COUGRATULATIONS....!");
        return "Game Over";
      }
    }
  }
  return "game draw";
}

const checkWin = function(array,symbol) {
  let winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  let winStatus = winningArray.some(function(elementArray){let msg = elementArray.every(function(element){return array[element] == symbol;});return msg;})
  return winStatus;
}

const generateLine = function() {
  let line = "";
  for(let no = 0; no < 7; no++){
    line = line + "_";
  }
  return line;
}

const buildSetup = function(array) {
  let setup = [];
  let line1 = "";
  let line2 = "";
  let line3 = "";
  for(let no = 1; no < 4; no++) {
    line1 = line1+"|"+array[no];
  }
  for(let no = 4; no < 7; no++) {
    line2 = line2+"|"+array[no];
  }
  for(let no = 7; no < 10; no++) {
    line3 = line3+"|"+array[no];
  }
  line1 = line1 + "|";
  line2 = line2 + "|";
  line3 = line3 + "|";
  setup = [line1,line2,line3];
  return setup
}

const assembleSetup = function(array) {
  let assembly = [];
  let index = 0;
  for(let no = 0; no < 6; no += 2) {
    assembly[no] = generateLine();
    assembly[no+1] = buildSetup(array)[index];
    index++;
  }
  assembly.push(generateLine());
  return assembly.join("\n");
}


runGame();
