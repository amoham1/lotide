const assertArraysEqual = function (array1, array2) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `
  if (eqArrays(array1, array2)) {
    return console.log(`${pass}` + array1 + " === " + array2);
  } else {
    return console.log(`${fail}` + array1 + " !== " + array2);
  }
};

const eqArrays = function (array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true
}

const without = function (source, itemsToRemove) {
  let arr = [];
  for (let i = 0; i < source.length; i++) {
    let check = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        check = false;
      }
    }
    if (check === true) {
      arr.push(source[i]);
    }
  }
  return arr;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3], [1, 2, 3]))  // => [ ]
console.log(without([1, 2, 3], [1, 2]))  // => [3]
console.log(without([1], []))  // => [1]
console.log(without([], [1]))  // => [ ]
console.log(without([1, 2, 3, 3, 3], [1, 2, 3, 4, 2])) // => []
console.log(without([1, 2, 3, 5, 6], [3, 6, 5, 10, 12, 34, 1]))  // => [2]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])) //=> ["hello", "world"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);