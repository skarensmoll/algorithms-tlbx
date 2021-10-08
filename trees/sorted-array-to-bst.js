
function Node(value) {
  this.val = value;
  this.left = null;
  this.right = null
}



function arrayToBSTArray(array) {
  const queue = [array];
  const bst = [];

  while(queue.length > 0) {
    const partition = queue.shift();

    if(partition.length  === 0) {
      bst.push(null);
      continue;
    }

    const nodeIndex = Math.ceil((partition.length - 1) / 2);
    bst.push(partition[nodeIndex]);

    if(partition.length === 1) {
      continue;
    }

    const leftSubtree = partition.slice(0, nodeIndex);
    const rightSubtree = partition.slice(nodeIndex + 1, partition.length);

    queue.push(leftSubtree);
    queue.push(rightSubtree);
  }

  if(bst[bst.length - 1] === null){
    bst.pop()
  }
  return bst;
}


function arrayToBSTArray(array) {
  const queue = [array];
  const bst = [];

  while(queue.length > 0) {
    const partition = queue.shift();

    if(partition.length  === 0) {
      bst.push(null);
      continue;
    }

    const nodeIndex = Math.ceil((partition.length - 1) / 2);
    bst.push(partition[nodeIndex]);

    if(partition.length === 1) {
      continue;
    }

    const leftSubtree = partition.slice(0, nodeIndex);
    const rightSubtree = partition.slice(nodeIndex + 1, partition.length);

    queue.push(leftSubtree);
    queue.push(rightSubtree);
  }

  if(bst[bst.length - 1] === null){
    bst.pop()
  }
  return bst;
}

console.log(arrayToBSTArray([-10,-3,0,5,9])); //