function Node(value) {
  this.value = value;
  this.visited = false;
  this.adjacentNodes = [];

  this.connect = (node) => {
    this.adjacentNodes.push(node);
  }

}

const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node0.connect(node1);
node0.connect(node2);
node0.connect(node3);
node1.connect(node0);
node1.connect(node2);
node2.connect(node0);
node2.connect(node1);
node2.connect(node4);

function breadFirstSearch (node) {
  const queue = [node];
  const visited = new Set();
  visited.add(node);

  while(queue.length > 0) {
    const currentNode = queue.shift();
    for(const a of currentNode.adjacentNodes) {
      if(!visited.has(a)) {
        queue.push(a);
        visited.add(a);
      }
    }

    console.log(currentNode.value)

  }
}

breadFirstSearch(node0);




