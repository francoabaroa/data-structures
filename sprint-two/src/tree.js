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
    this.children.push(tree);
  } else {
    for (var i = 0; i < this.children.length; i++) {
      console.log(this.children);
      this.children.children.push(value); 
    }
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
Time complexity for tree is O(n).
 */
