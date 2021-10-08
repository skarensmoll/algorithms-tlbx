class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }

  connect(node) {
    this.edgesList.push(node);
  }

  getAdjacentNodes() {
    return this.edgesList.map(e => e.value);
  }

  isConnected(node) {
    const index = this.edgesList.findIndex(e => e.value === node.value);
    return index !== -1;
  }
}


class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  breadFirstSearch(node) {
    const queue = [];
    queue.push(this.nodes[0]);

    let found = false;

    while(queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);
      if(currentNode.value === node.value) {
        found = true;
        break;
      }

      queue.push(...currentNode.edgesList)
    }
  }
}


const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');



nodeA.connect(nodeB);
nodeA.connect(nodeC);
nodeB.connect(nodeD);
nodeB.connect(nodeE);
nodeC.connect(nodeF);
nodeC.connect(nodeG);


const graph = new Graph([ nodeA, nodeB, nodeC, nodeD, nodeE]);

console.log(graph);

for (let node of graph.nodes) {
  console.log(`Node ${node.value}`);
  for(let connectedNode of node.edgesList) {
    console.log(`Node ${node.value} is connected to ${connectedNode.value}`);
  }
}


console.log(nodeA.getAdjacentNodes());

console.log(nodeB.isConnected(nodeC));




// First attempt ... bread First Search can be perfectly done using a queue
// without recursion
function breadFirstSearch(node, queue) {
  if(!queue) return;
  if(queue.length === 0) return;

  const currentNode = queue.shift();
  if(currentNode.value === node.value)
    return 'Found it!';
  else {
    if(currentNode.edgesList.length > 0) {
      queue.push(...currentNode.edgesList);
      const result = breadFirstSearch(node, queue);
      if(result) return result;
    }
  }
}

// const queue = [graph.nodes[0]];
// console.log(breadFirstSearch(nodeE, queue));

console.log(graph.breadFirstSearch(nodeE) ? 'Found' : 'Not Found');