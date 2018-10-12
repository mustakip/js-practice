const replaceElement = require("./lib.js").replaceElement; 

const main = function() {
  let string = process.argv[2];
  let array = string.split(",");
  let element = process.argv[3];
  let position = process.argv[4];
  console.log(replaceElement(array,element,position));
}

main();


