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

const middle = function (array) {
  let mid = [];
  let length = array.length;
  if (length <= 2) {
    return mid;
  }
  else if (length > 2 && length % 2 === 0) {
    mid = [array[Math.floor((length - 1) / 2)], array[Math.floor(length / 2)]];
    return mid;
  }
  else if (length > 2 && length % 2 !== 0) {
    mid = [array[Math.round((length - 1) / 2)]];
    return mid
  }
}
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5, 6]))