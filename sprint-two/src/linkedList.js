var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
