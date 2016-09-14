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
      for ( var key in storage ) {
        var dequeued = storage[key];
        break;
        
      }
    }
    return dequeued;
  };
      

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
