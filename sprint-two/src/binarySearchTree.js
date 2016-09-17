var BinarySearchTree = function(value) {
  var biTree = {};
  _.extend(biTree, biTreeMethods);
  // console.log(biTree);
  biTree.value = value;
  biTree.left = undefined;
  biTree.right = undefined;
  
  return biTree;
};

var biTreeMethods = {};

biTreeMethods.insert = function (value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  console.log(this);
};

biTreeMethods.contains = function () {

};

biTreeMethods.depthFirstLog = function () {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
