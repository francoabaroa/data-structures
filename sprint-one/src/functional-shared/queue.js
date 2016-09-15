var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.counter = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.counter++] = value;
};

queueMethods.dequeue = function () {
  if (this.counter > 0) {
    this.counter--;
    var dequeued = this.storage[0];
    this.storage[0] = this.storage[this.counter];
  }
  return dequeued;
};

queueMethods.size = function () {
  return this.counter;
};


