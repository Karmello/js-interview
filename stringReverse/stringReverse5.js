function reverse(str) {

  if (!str || str.length < 2) return str;
  return str.split('').reverse().join('');
}

console.log(reverse('The Lord Of The Rings'));
