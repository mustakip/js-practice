let readline = require("readline-sync");

const input = function(message) {
  let intake = readline.question(message);
  return intake;
}
const generateArray = function(length) {
  let array = [];
  for(let index = 0 ; index <length; index++) {
    array[index] = input("enter a number :  ");
  }
  return array;
}

const main = function() {
  let length = +process.argv[2];
  console.log(generateArray(length));
}

main();
