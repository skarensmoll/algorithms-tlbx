function Node(value) {
  this.value = value;
  this.edges = [];
  this.distance = Infinity;
}

function Graph() {
  this.graph = {};
}

Graph.prototype.add = function(node) {
  this.graph[node.value] = node;
}

Graph.prototype.connect = function(firstNode, secondNode, cost) {
  this.graph[firstNode.value].edges.push([secondNode.value, cost]);
}

function PriorityQueue() {
  this.elements = [];
}

// node: Array<int, int> // node´s key, distance to source node
PriorityQueue.prototype.enqueue = function(node) {
  let j = 0;
  let index = null;

  while (index === null) {
    if (this.elements[j] === undefined) {
      this.elements[j] = node;
      index = j;
      continue;
    }

    const {distance} = this.elements[j];
    const {distance: nodeDistance} = node;

    if(distance <= nodeDistance) {
      j++;
    } else {
      this.elements.splice(j, 0, node);
      index = j;
    }
  }
}

PriorityQueue.prototype.dequeue = function() {
  return this.elements.shift();
}

PriorityQueue.prototype.size = function() {
  return this.elements.length;
}




const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

const graph = new Graph();
graph.add(a);
graph.add(b);
graph.add(c);
graph.add(d);
graph.add(e);
graph.add(f);

graph.connect(a, b, 10);
graph.connect(a, c, 20);
graph.connect(b, d, 50);
graph.connect(b, e, 10);
graph.connect(c, d, 20);
graph.connect(c, e, 33);
graph.connect(e, f, 1);
graph.connect(d, e, 10);
graph.connect(d, f, 2);

console.log(graph.graph);

//// Testing queue

// const queue = new PriorityQueue();
// queue.enqueue(['a', 10]);
// queue.enqueue(['b', 8]);
// queue.enqueue(['c', 9]);
// queue.enqueue(['c', 5]);
// queue.enqueue(['c', 6]);
// console.log(queue.elements);
// console.log(queue.size());
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue.elements);
// console.log(queue.size());

Graph.prototype.shortestPath = function(startingNode) {
  this.graph[startingNode.value].distance = 0;

  const visitedNodes = new Set();
  const priority = new PriorityQueue();
  priority.enqueue(startingNode);

  while (priority.size() > 0) {
    const { value: nodeValue, distance: nodeDistance, edges} = priority.dequeue();

    if(visitedNodes.has(nodeValue)) {
      continue;
    }
    console.log('item dequeued', nodeValue);

    visitedNodes.add(nodeValue);

    for(const edge of edges) {
      const [edgeNode, cost] = edge;
      const newDistance = nodeDistance + cost;
      const oldDistance = this.graph[edgeNode].distance;

      if(oldDistance !== Infinity && newDistance > oldDistance) {
        continue;
      }
      console.log('node:', edgeNode, 'prevDistance', oldDistance, 'newDistance', newDistance)
      this.graph[edgeNode].distance = newDistance;
      priority.enqueue(this.graph[edgeNode]);
    }
  }
}

graph.shortestPath(a);
console.log(graph)