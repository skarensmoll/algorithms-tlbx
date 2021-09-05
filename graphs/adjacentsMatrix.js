const vertices = [1, 4, 5, 8, 2];

const edges = [
  [1, 5],
  [1, 4],
  [1, 8],
  [4, 5],
  [8, 2]
];

const adjacentMatrix = [
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0],
]

function findAdjacencies(node) {
  const indexCol = vertices.indexOf(node);
  if(indexCol === -1) return null;
  let adjacencies = [];

  adjacentMatrix.forEach((row,i) => {
    const edge = row[indexCol];
    if(edge === 1) adjacencies.push(vertices[i]);
  });

  return adjacencies;
}


console.log(findAdjacencies(1));
console.log(findAdjacencies(2));
