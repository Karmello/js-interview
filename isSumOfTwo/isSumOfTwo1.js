function isSumOfTwo(arr, sum) {

  var len = arr.length;
  
  for (var i = 0; i < len - 1; i++) {  
     for (var j = i + 1; j < len; j++) {
        if (arr[i] + arr[j] == sum) {
          return true;
        }
     }
  }
  
  return false;
}

console.log(isSumOfTwo([6,4,3,2,1,7], 9));
console.log(isSumOfTwo([6,4,3,2,1,7], 2));
