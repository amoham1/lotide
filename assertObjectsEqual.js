
const assertEqual = function (actual, expected) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (actual === expected) {
    return console.log(`${pass}` + actual + " === " + expected);
  } else {
    return console.log(`${fail}` + actual + " !== " + expected);
  }
};
// Check if all items exist and are in the same order
const eqArrays = function (array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true
}




const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
}
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }  
};

module.exports = assertObjectsEqual;