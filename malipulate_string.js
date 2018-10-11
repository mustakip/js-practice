const replaceElement = function(array,element,position) {
  for(let index in array) {
    if(index == position) {
      for(let post = array.length; post >= index; post--) {
        array[post] = array[post-1];
      }
    }
  }
  array[position] = element;
  return array;
}

const main = function() {
  let string = process.argv[2];
  let array = string.split(",");
  let element = process.argv[3];
  let position = process.argv[4];
  console.log(replaceElement(array,element,position));
}

main();


