const assert = require("assert");
const sortArray = require("./sortArray.js").sortArray;

assert.deepEqual(sortArray([4,9,7,2]),[2,4,7,9]);
assert.deepEqual(sortArray([7,0,5,4]),[0,4,5,7]);
assert.deepEqual(sortArray([5,0,0,100]),[0,0,5,100]);
assert.deepEqual(sortArray([5,8,6]),[5,6,8]);
