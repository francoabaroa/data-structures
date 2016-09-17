

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] === node) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Adding a removed variable because removeNode calls on the removeEdge method, which takes two arguments
  var removed;
  if (!this.edges[node]) {
    this.edges[node] = [];
  }
  //This if/else if control flow statement is used to give the removed variable its value
  if (this.edges[node].indexOf(node) === 0) {
    removed = this.edges[node][1];  
  } else if (this.edges[node].indexOf(node) === 1) {
    removed = this.edges[node][0];
  }
  //This if statement is used to set the target node = undefined and then call removeEdge method with node & removed
  if (this.nodes[node] === node) {
    this.nodes[node] = undefined;
    this.removeEdge(node, removed);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //The if statement checks if there is a hadEdge array at edges[fromNode] & then checks if that array includes fromNode and toNode
  //The else if statement checks if there is a hadEdge array at edges[toNode] & then checks if that array includes fromNode and toNode
  if (this.edges[fromNode] !== undefined) {
    return this.edges[fromNode].includes(fromNode) && this.edges[fromNode].includes(toNode);
  } else if (this.edges[toNode] !== undefined) {
    return this.edges[toNode].includes(fromNode) && this.edges[toNode].includes(toNode);
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = [fromNode, toNode];
  this.edges[toNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges[fromNode] = undefined;
  this.edges[toNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 The time complexity of the above methods is O(1);
 forEachNode time complexity is O(n), since it needs to iterate through all the keys of object, but the bigger picture time complexity is O(1);
 */



