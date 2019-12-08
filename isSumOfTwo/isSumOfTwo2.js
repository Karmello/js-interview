function sumFinder(arr, sum) {

  var differ = {},
      len = arr.length,
      substract;

  for (var i = 0; i < len; i++) {

    substract = sum - arr[i];

    if (differ[substract]) {
      return true;
    } else {
      differ[arr[i]] = true;
    }
  }

  return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9));
console.log(sumFinder([6,4,3,2,1,7], 2));
