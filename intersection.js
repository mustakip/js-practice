const extractCommon = function(array1,array2) {
  let intersection = [""];
  let mark = 0;
  for(let post = 0; post < array1.length; post++) {
    for(let position = 0; position < array2.length; position++) {
      if(array1[post] == array2[position]) {
        intersection[mark] = array1[post];
        mark++;
      }
    }
  }
  return intersection;
}

const main = function() {
let array1 = [22,47,86,39,87,67,56];
let array2 = [54,76,86,95,87,23,67];
let array3 = [45,56,67,86,34,89,87];
common = extractCommon(array1,array2);
console.log(extractCommon(common,array3));
}

main();
