function reverseWordLetters(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(reverseWordLetters('I am the good boy'));
