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
      list.head = Node(value);
    }
    while (!list.head.next) {
      list.head.next = list.head;
    }
    list.head.next = list.tail = Node(value);
  };


  list.removeHead = function() {
    list.head = list.head.next;
    return list.head.value;
  };


  list.contains = function(target) {
    var current = list.head.next;

    if (list.head.value === target) {
      return true;
    } 
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
