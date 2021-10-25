// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `;
  if (actual === expected) {
    return console.log(`${pass}` + actual + " === " + expected);
  } else {
    return console.log(`${fail}` + actual + " !== " + expected);
  }
};

const head = function (list) {

  let k = list[0];
  return k
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), );
