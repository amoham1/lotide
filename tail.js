const assertEqual = function(actual, expected) {
  const pass = ` ✅✅✅  Assertion Passed: `;
  const fail = ` 🛑🛑🛑  Assertion Failed: `;
  if (actual === expected) {
    return console.log(`${pass}` + actual + " === " + expected);
  } else {
    return console.log(`${fail}` + actual + " !== " + expected);
  }
};

const tail = function(list) {
  let k = [];
  for (let i = 1; i < list.length; i++) {
    k.push(list[i]);
  }
  return k;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!