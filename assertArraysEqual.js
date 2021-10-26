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