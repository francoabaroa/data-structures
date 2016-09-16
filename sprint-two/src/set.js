var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage [ item ] = item;
    // console.log('success', this._storage );
  
};

setPrototype.contains = function(item) {
  if ( this._storage[item] === item) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage[item] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
