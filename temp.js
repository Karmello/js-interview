for (let i = 0; i < 10; i++) {
  const cb = function(i) {
    return function() {
      console.log(i);
    }
  };
  setTimeout(cb(i), 10);
}
