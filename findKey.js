// findKeyByValue = function (object,value){
//   let searcher = Object.keys(object);
//   for (let i = 0; i < searcher.length; i++) {
//     if (object[searcher[i]] === value) {
//       return searcher[i];
//     }
//   }
// }



findKey = function (object,callback){
  for (let i in object){
    if (callback(object[i])){
      return i;
    }
}
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) )