const assert = require("assert");

const sortArray = function(unsortedArray) {
  let sortedArray = [];
  for(let position = 0; position < unsortedArray.length; position++){
    sortedArray = swapElements(unsortedArray);    
  }
  return sortedArray;
}

const swapElements = function(unsortedArray) {
  for(let index = 0; index < unsortedArray.length; index++) {
    if(unsortedArray[index] >unsortedArray[index + 1]) {
      let stack = unsortedArray[index];
      unsortedArray[index] = unsortedArray[index + 1];
      unsortedArray[index + 1] = stack;
    }
  }
  return unsortedArray;
}

const main = function() {
  let inputArray = [2,7,5,9,1,45,7,8]; 
  let unsortedArray = inputArray.slice();
  let sortedArray = sortArray(unsortedArray);
  let expectedOutput = [1,2,5,7,7,8,9,45];
}

main();

exports.sortArray = sortArray;
