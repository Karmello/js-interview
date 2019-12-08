function swapNumb(a, b) {

  console.log('before swap: ','a:', a + ',', 'b:', b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log('after swap: ','a:', a + ',', 'b:', b);
  return '';
}

console.log(swapNumb(2, 3));
