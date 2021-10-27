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

const without = function (source,itemsToRemove){
  for (var i = 0; i < source.length; i++){
    for(var w = 0; w < itemsToRemove; w++){
      if (source[i] === itemsToRemove[w]){
        source.splice(i,1);
      }
    }
    return source;
  }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);