function reverse(str) {
  
  if (str === '') {
    return str;
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverse('white guys can\'t jump'));
