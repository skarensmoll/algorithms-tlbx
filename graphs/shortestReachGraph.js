function ShortestReachGraph(numNodes, connections, startNode) {
  this.numNodes = numNodes;
  this.connections = connections;
  this.startNode = startNode;
  this.graph = [];
  this.createAdjacency();
  console.log('created adjacency', this.graph)
  this.assignLevels(this.graph[this.startNode - 1]);
}


ShortestReachGraph.prototype.createAdjacency = function() {
  for(let i = 0; i < this.numNodes; i++) {
    this.graph.push({
      value: i,
      level: -1,
      edges: []
    })
  }
  console.log(this.numNodes)

  this.graph[this.startNode - 1].level = 0;
  for(let conn of this.connections) {
    let [from, to] = conn;
    from--; to--;
    this.graph[from].edges.push(to);
    this.graph[to].edges.push(from);
  }
}

ShortestReachGraph.prototype.assignLevels = function (node) {
  let stackNodes = [node];
  const visitedNodes = new Set();
  visitedNodes.add(node.value);

  while(stackNodes.length > 0) {
    const currentNode = stackNodes.shift();
    const level = currentNode.level + 1;
    const edges = this.graph[currentNode.value].edges;

    for(let edgeNode of edges) {
      if(!visitedNodes.has(edgeNode)) {
        visitedNodes.add(edgeNode)
        this.graph[edgeNode].level = level;
        stackNodes.push(this.graph[edgeNode]);
      }
    }
  }
  console.log(this.graph)
}


ShortestReachGraph.prototype.printDistances = function() {
  const result = [];
  for(let node of this.graph) {
    if(node.value === this.startNode - 1) {
      continue;
    }
    const distance = node.level === -1 ? -1 : node.level * 6;
    result.push(distance);
  }
  return result;
}


//const shortest = new ShortestReachGraph(4, [ [1, 2], [1, 3] ], 1);
// const shortest = new ShortestReachGraph(3, [ [2, 3] ], 2);
const shortest = new ShortestReachGraph(7, [ [1,2], [1,3], [3,4], [2,5] ], 2); //[ 6, 12, 18, 6, -1, -1 ]
console.log(shortest.printDistances());



