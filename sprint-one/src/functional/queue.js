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
      var dequeued = storage[0];
      // for ( var key in storage ) {
      //  console.log(storage);
      //   var dequeued = storage[key];
      //   break;
        
      // }
    }
    return dequeued;
  };
      

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
