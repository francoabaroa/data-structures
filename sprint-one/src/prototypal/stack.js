var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(Stack.prototype);
  stack.counter = 0;
  return stack;
};

var stackMethods = Object.create(Stack.prototype);


Stack.prototype.size = function () {
  return this.counter;
};

Stack.prototype.push = function (value) {
  this[this.counter++] = value;
};

Stack.prototype.pop = function () {
  if (this.counter > 0) {
    var temp = this[this.counter];
    this.counter--;
  }
  return temp;
};