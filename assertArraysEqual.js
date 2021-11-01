const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (eqArrays(array1,array2)) {
    return console.log( `${pass}`+ array1 + " === " + array2);
  } else {
    return console.log(`${fail}`+ array1 + " !== " + array2);
  }
};





module.exports = assertArraysEqual;