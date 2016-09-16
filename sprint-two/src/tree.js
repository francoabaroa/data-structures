var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here'
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target || this.children[i].contains(target)) {
      return true;
    } 
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
Time complexity for tree is O(n).
 */
