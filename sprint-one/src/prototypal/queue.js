var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.counter = 0;
  return queue;

};

var queueMethods = {};

queueMethods.size = function () {
  return this.counter;
};

queueMethods.enqueue = function (value) {
  this[this.counter++] = value;
};

queueMethods.dequeue = function () {
  if ( this.counter > 0 ) {
    var temp = this[0];
    this.counter--;
    this[0] = this[this.counter];
  }
  return temp;
};
