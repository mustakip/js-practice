const extractCommon = function(array1,array2) {
  let intersection = [""];
  let actualIntersect = ["undefined"];
  for(elements in array1) {
    intersection[array1[elements]] = array1[elements];
  }
  for(elements in array2) {
    if(intersection[array2[elements]] == array2[elements]) {
      actualIntersect[array2[elements]] = array2[elements];
    }
  }
  return actualIntersect;
}

const main = function() {
  let array = [[22,47,86,39,87,67,56],
               [54,76,56,86,95,87,23,67],
               [45,56,67,34,89,87],
               [67,87,45,78,96,56]];
  let start = array[0];

  for(let arrayNo = 0; arrayNo < array.length-1; arrayNo++) {
    let common = extractCommon(start,array[arrayNo+1]);
    start = common;
  }
  for(elements in start ) {
    if(start[elements] != "undefined") {
      console.log(start[elements]);
    }
  }
}

main();
