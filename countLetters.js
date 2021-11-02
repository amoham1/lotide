// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (actual === expected) {
    return console.log(`${pass}` + actual + " === " + expected);
  } else {
    return console.log(`${fail}` + actual + " !== " + expected);
  }
}; 

const countLetters = function (string) {
   let counter = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (counter[letter]) {
        counter[letter] += 1;
      }
      else {
        counter[letter] = 1;
      }
    }
  }
  return counter
}
console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
