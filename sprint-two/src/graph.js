

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
  var removed;
  if (!this.edges[node]) {
    this.edges[node] = [];
  }
  if (this.edges[node].indexOf(node) === 0) {
    removed = this.edges[node][1];  
  } else if (this.edges[node].indexOf(node) === 1) {
    removed = this.edges[node][0];
  }
  if (this.nodes[node] === node) {
    this.nodes[node] = undefined;
    this.removeEdge(node, removed);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
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
    console.log(key);
    cb(this.nodes[key]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



