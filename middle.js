// ACTUAL FUNCTION
const middle = function(array) {
  let mid = [];
  let length = array.length;
  if (length <= 2){
    return mid;
  }
  else if (length > 2 && length % 2 === 0){
    mid = [array[Math.floor((length -1)/ 2)], array[Math.floor(length / 2)]];
    return mid;
  }
  else if (length > 2 && length % 2 !== 0){
    mid = [array[Math.round((length -1) / 2)]];
    return mid
  }
}
console.log(middle([1, 2, 3]) )
console.log(middle([1, 2, 3, 4, 5, 6]))