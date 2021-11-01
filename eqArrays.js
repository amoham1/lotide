const assertEqual = require('./assertEqual');

// Check if all items exist and are in the same order
const eqArrays = function (array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true
}


module.exports = eqArrays;