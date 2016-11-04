var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var contains = false;

  function recurse (tree) {
    if (tree.children.length === 0) {
      return;
    }

    if (tree.value === target) {
      contains = true;
    }

    for (var i = 0; i < tree.children.length; i++) {
     if (tree.children[i].value === target) {
        contains = true;
      } else {
        recurse(tree.children[i]);
      }
    }
  }
  recurse(this);
  return contains;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */