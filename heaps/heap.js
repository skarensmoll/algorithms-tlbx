function Heap() {
  this.elements = [];
}

Heap.prototype.insert = function(node) {
  this.elements.push(node);
}

Heap.prototype.size = function() {
  return this.elements.length -1 ;
}

Heap.prototype.remove = function(nodeIndex) {
  let node = this.elements.pop();

  if(nodeIndex > this.size()) {
    return null;
  }

  if(nodeIndex < this.size()) {
    this.elements[nodeIndex] = node;
    this.bubbleDown(nodeIndex);
  }

  console.log(this.elements);
  return node;
}


Heap.prototype.bubbleDown = function(nodeIndex) {
  let leftNodeIndex = nodeIndex * 2 + 1;
  let rightNodeIndex = nodeIndex * 2 + 2;
  let leftNode = this.elements[leftNodeIndex];
  let rightNode = this.elements[rightNodeIndex];
  let smallestNodeIndex = nodeIndex;
  let currentNode = this.elements[nodeIndex];

  if(leftNode === undefined) return;

  if(leftNode !== undefined && leftNode < this.elements[smallestNodeIndex]) {
    smallestNodeIndex = leftNodeIndex;
  }

  if(rightNode !== undefined && rightNode < this.elements[smallestNodeIndex]) {
    smallestNodeIndex = rightNodeIndex;
  }

  if(smallestNodeIndex !== nodeIndex) {
    this.elements[nodeIndex] = this.elements[smallestNodeIndex];
    this.elements[smallestNodeIndex] = currentNode;
    this.bubbleDown(smallestNodeIndex);
  }
}

// const heap = new Heap();
// heap.insert(4);
// heap.insert(50);
// heap.insert(7);
// heap.insert(55);
// heap.insert(90);
// heap.insert(87);
// heap.insert(2);

// console.log(heap.elements);
// heap.remove(0);


const heap = new Heap();
heap.insert(22);
heap.insert(50);
heap.insert(23);
heap.insert(88);
heap.insert(90);
heap.insert(32);
heap.insert(74);
heap.insert(80);

console.log(heap.elements);
heap.remove(0);