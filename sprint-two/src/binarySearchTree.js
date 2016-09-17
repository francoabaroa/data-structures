var BinarySearchTree = function(value) {
  var biTree = {};
  _.extend(biTree, biTreeMethods);
  biTree.value = value;
  biTree.left = undefined;
  biTree.right = undefined;
  return biTree;
};

var biTreeMethods = {};

biTreeMethods.insert = function (value) {
  if (value < this.value) {
    (this.left === undefined) ? this.left = BinarySearchTree(value) : this.left.insert(value);
  } else {
    (this.right === undefined) ? this.right = BinarySearchTree(value) : this.right.insert(value);
  }
};

biTreeMethods.contains = function (value) {
  if (value < this.value) {
    return (this.left.value === value) ? true : false;
  } else {
    return (this.right.value === value) ? true : false;
  } 
};

biTreeMethods.depthFirstLog = function (func) {
  func(this.value);
  if (this.left !== undefined) {
    func(this.left.value);
  }
  if (this.left.right !== undefined) {
    func(this.left.right.value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 The time complexity for insert and contains is O(log n);
 The time complexity for depthFirstLog is O(n) because it needs to go through each value in the tree but looking at the bigger picture, binary search tree's time complexity is O(log n);
 */
