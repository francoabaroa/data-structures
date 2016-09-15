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