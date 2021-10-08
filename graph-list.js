const vertices = [1, 4, 5, 8, 2];

const edges = [
  [1, 5],
  [1, 4],
  [1, 8],
  [4, 5],
  [8, 2]
];

const findAdjacent = (node) => {
  const adjacentList = [];

  for(const edge of edges) {
    // edge [1, 5]
    const index = edge.indexOf(node);
    if(index === -1) continue;

    adjacentList.push(index === 0 ? edge[1] : edge[0]);
  }
  return adjacentList;
}


const nodesConnected = (node1, node2) => {


}

console.log(findAdjacent(4)) // 1, 5
console.log(findAdjacent(1)) // 1, 5








