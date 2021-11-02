const letterPositions = function(sentence) {
  const results = {};
  let counter = -1;
  // logic to update results here
  for (letters of sentence){
    if (letters !== " "){
      if(results[letters]){
        counter += 1;
        results[letters].push(counter);
      }
      else{
        counter += 1;
        results[letters]= [counter]
      }
      
    }
    else {
      counter += 1;
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
module.exports = letterPositions;