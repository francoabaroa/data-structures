var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter++] = value;
  };

  someInstance.dequeue = function() {
    if ( counter > 0) {
      var dequeued = storage[0];
      storage[0] = storage[--counter];
    }
    return dequeued;
  };
      

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
