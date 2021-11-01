const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require('./eqArrays');


const middle = function (array) {
  let mid = [];
  let length = array.length;
  if (length <= 2) {
    return mid;
  }
  else if (length > 2 && length % 2 === 0) {
    mid = [array[Math.floor((length - 1) / 2)], array[Math.floor(length / 2)]];
    return mid;
  }
  else if (length > 2 && length % 2 !== 0) {
    mid = [array[Math.round((length - 1) / 2)]];
    return mid
  }
}
module.exports = middle;