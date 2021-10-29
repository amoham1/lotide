const assertArraysEqual = function(array1, array2) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (eqArrays(array1,array2)) {
    return console.log( `${pass}`+ array1 + " === " + array2);
  } else {
    return console.log(`${fail}`+ array1 + " !== " + array2);
  }
};

const eqArrays = function (array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true
}


const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word);
const results3 = map(words, word => word[1]);
assertArraysEqual(results1,['g,c,t,m,t']);
assertArraysEqual(results2,["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results3,['r,o,t,a,t']);
