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
  // this.children = value;
  var parent = this;
  var tree = Tree(value);

  if (this.children[0] === undefined) {
    this.children[0] = tree;
  }
  this.children[0].value = value;
  console.log(this);
  // if (this.children.length === 0) {
  //   parent = tree;
  //   this.value = value;
  //   // this.children.push(value);
  //   console.log(this);
  // }

  // console.log(this.children);
};

treeMethods.contains = function(target) {
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
