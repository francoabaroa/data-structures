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
  var parent = this;
  var tree = Tree(value);

  if (this.children[0] === undefined) {
    this.children[0] = tree;
  }
  this.children[0].value = value;
};

treeMethods.contains = function(target) {
  return false;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
