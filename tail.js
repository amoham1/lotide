const assertEqual = require('./assertEqual');

const tail = function(list) {
  let k = [];
  for (let i = 1; i < list.length; i++) {
    k.push(list[i]);
  }
  return k;
};

module.exports = tail;