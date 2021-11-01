// const middle = require("../middle");



// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1]));
// console.log(middle([1,2,3]));


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#tail", () => {
  
  it("should return the middle of the array which is 2", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("this array is even so it should show 4 & 6", () => {
    assert.deepEqual(middle([1,2,3,4,6,8,9,11]), [4,6]);
  });
  it("this should fail the test im put 1 as a result but it should be blank", () => {
    assert.deepEqual(middle([1]), [1]);
  });
});

