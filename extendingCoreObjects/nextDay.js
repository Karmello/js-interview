Date.prototype.nextDay = function() {
  var currentDayNumber = this.getDate();
  return new Date(this.setDate(currentDayNumber + 1));
}

console.log(new Date().nextDay());
