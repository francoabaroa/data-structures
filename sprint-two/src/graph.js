var Graph = function() {
  this.nodes = {};
  this.edges = {};
};


Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};


Graph.prototype.contains = function(node) {
  return (this.nodes[node] === node) ? true : false;
};


Graph.prototype.removeNode = function(node) {
  this.nodes[node] = null;

};


Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] === null || this.nodes[toNode] === null) {
    return false;
  }
  return (this.edges[JSON.stringify([fromNode, toNode].sort())]) ? true : false;
};


Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[JSON.stringify([fromNode, toNode].sort())] = [fromNode, toNode];
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[JSON.stringify([fromNode, toNode].sort())];
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



