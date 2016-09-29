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
      console.log(tree.children[i].value);
      debugger;
     if (tree.children[i].value === target) {
        contains = true;
        console.log('in hurr');
      } else {
        recurse(tree.children[i]);
      }
      console.log(tree.children[i], 'here');
    }
  }
  recurse(this);
  return contains;
};

var tree = Tree(4);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(5));
// console.log(tree);



/*
 * Complexity: What is the time complexity of the above functions?
 */