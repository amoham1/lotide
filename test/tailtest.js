// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns the length of the array which shoud be 3", () => {
    assert.strictEqual((words.length), 3);
  });
  const names = ["ahmed","mohamed","ayub","james"];
  it("this shoud return length of 4", () =>{
    assert.strictEqual((names.length), 4);
  });
});