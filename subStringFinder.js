function subStringFinder(str, subStr) {

  var idx = 0,
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;

  for (; i < len; i++) {
  
    if (str[i] == subStr[j]) {
      j++;
    } else {
      j = 0;
    }
    
    if (j == 0) {
      idx = i;
    } else if (j == subLen) {
      return idx;
    }
  }
  
  return -1;
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'));
console.log(subStringFinder('abbcdabbbbbck', 'bck'));

// to be fixed
console.log(subStringFinder('abbcdabbbbbck', 'bbbck'));
