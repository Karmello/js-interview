function reverseWords(str) {

  var rev = [], wordLen = 0;

  for (var i = str.length - 1; i >= 0; i--) {
    
    if (str[i] === ' ') {
      rev.push(str.substr(i + 1, wordLen));
      wordLen = 0;

    } else if (i === 0) {
      rev.push(str.substr(i, wordLen + 1));
      wordLen = 0;

    } else {
      wordLen++;
    }
  }

  return rev.join(' ');
}

console.log(reverseWords('this is an example sentence'));
