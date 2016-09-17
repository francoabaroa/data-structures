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
};

biTreeMethods.contains = function (value) {
  if (value < this.value) {
    if (this.left.value === value) {
      return true;
    }
    return false;
  } else {
    if (this.right.value === value) {
      return true;
    }
    return false;
  } 
};

biTreeMethods.depthFirstLog = function (func) {
  console.log(this);
  func(this.value);
  if (this.left !== undefined) {
    func(this.left.value);
  }
  if (this.left.right !== undefined) {
    func(this.left.right.value);
  }
  // if (this.value !== undefined) {
  //   func(this.value);
  //   if (this.value.left !== undefined) {
  //     console.log('here');
  //   }
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
