String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

console.log('hello world'.reverse());
