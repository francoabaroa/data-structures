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
      counter--;
      var dequeued = storage[counter];
    }
    return dequeued;
  };
      

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
