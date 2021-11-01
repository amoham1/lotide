// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (actual === expected) {
    return console.log( `${pass}`+ actual + " === " + expected);
  } else {
    return console.log(`${fail}`+ actual + " !== " + expected);
  }
};


module.exports = assertEqual;