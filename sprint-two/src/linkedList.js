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
    if (list.head.next !== null) {  
      var newHead = list.head.next;
      // delete list.head;
      list.head = newHead;
    }
    // list.head.next = list.tail;
    return newHead.value; 
  };

  list.contains = function(target) {
    for (var key in list.head) {
      console.log(list.head[key]);
      if (list.head[key] === target) {
        return true;
      } 
      return false;
    }
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
