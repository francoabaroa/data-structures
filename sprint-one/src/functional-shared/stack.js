var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  _.extend(storage, stackMethods);
  storage.counter = 0;
  return storage;

};

var stackMethods = {};


stackMethods.size = function () {
  return this.counter;
};

stackMethods.push = function (value) {
  this[this.counter++] = value;
};

stackMethods.pop = function () {
  if ( this.counter > 0) {
    this.counter--;
    var popped = this[counter];
  }
  return popped;
};