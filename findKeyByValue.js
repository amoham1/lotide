//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (actual === expected) {
    return console.log( `${pass}`+ actual + " === " + expected);
  } else {
    return console.log(`${fail}`+ actual + " !== " + expected);
  }
};
findKeyByValue = function (object,value){
  let searcher = Object.keys(object);
  for (let i = 0; i < searcher.length; i++) {
    if (object[searcher[i]] === value) {
      return searcher[i];
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);