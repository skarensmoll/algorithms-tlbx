
// taking advantage of hoisting here, although let
// declaration won't be hoisted the Node constructor function will

let DFW = new Node('DFW');
let LAX = new Node('LAX');
let JFK = new Node('JFK');
let HLN = new Node('HLN');
let BOS = new Node('BOS');
let EWR = new Node('EWR');
let SAN = new Node('SAN');
let MIA = new Node('MIA');
let MCO = new Node('MCO');
let PBI = new Node('PBI');

DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HLN);
LAX.connect(EWR);
LAX.connect(SAN);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MIA.connect(PBI);
MIA.connect(EWR);

const graph = new Graph(DFW, JFK, LAX, HLN, BOS, EWR, SAN, MIA, MCO, PBI);
graph.breadthFirstSearch(DFW, PBI);

// creating constructor function Node
function Node(value) {
  this.value = value;
  this.edgeList = [];
  this.visited = false;

  this.connect = (node) => {
    this.edgeList.push(node);
  }
}

// creating graph constructor function
function Graph(nodes) {
  this.nodes = nodes;

  this.breadthFirstSearch = (start, node) => {
    const queue = [start];
    let found = false;

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode)
      // if(currentNode.value == node.value) {
      //   found = true;
      //   break;
      // }

      queue.push(...currentNode.edgeList);
    }
  }
}



