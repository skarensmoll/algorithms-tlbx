function NearestClone(gf, gt, c, tc) {
  let graph = [];
  let finalRoute = Number.MAX_SAFE_INTEGER;
  let graphFrom = gf;
  let graphTo = gt;
  let colors = c;
  let targetColor = tc;

  function makeAdjacencyList() {
    graph = new Array(c.length);
    for (let i=0; i<c.length; i++) {
      graph[i] = new Array();
    }
    for (let i=0; i<graphFrom.length; i++) {
        let from = graphFrom[i]-1;
        let to = graphTo[i]-1;
        graph[from].push(to);
        graph[to].push(from);
    }
    return graph;
  }

  function setAdjacencies() {
    while(graphFrom.length > 0) {
      const nodeFrom = graphFrom.shift();
      const nodeTo = graphTo.shift();
      connect(nodeFrom, nodeTo);
    }
  }

  function connect(firstNode, secondNode) {
    graph[firstNode] = graph[firstNode] === undefined ?
                            [secondNode] :
                            [...graph[firstNode], secondNode];

    graph[secondNode] = graph[secondNode] === undefined ?
                            [firstNode] :
                            [...graph[secondNode], firstNode];

  }


  function findShortestRoute(){
    for(let i=0; i < colors.length;i++) {
      if(colors[i] === targetColor) {
        findMatchColorNode( i);
      }
    }
  }

  function findMatchColorNode(node) {
    let distance = -1;
    let stackNodes = [ {node, level : 0} ];
    let visitedNodes = new Set();
    visitedNodes.add(node);

    while(stackNodes.length > 0 ){
      const currentNode = stackNodes.shift();
      const level = currentNode.level + 1;

      for (const adj of graph[currentNode.node]) {
        console.log('adj', adj)

        if(!visitedNodes.has(adj)) {
          if(colors[adj] === targetColor) {
            distance = level;
            console.log('found');
            break;
          }

          visitedNodes.add(adj);
          stackNodes.push({ node:adj, level });
        }
      }

      if(distance !== -1) {
        console.log('found2');
        finalRoute = Math.min(finalRoute, distance);
        break;
      }
    }

    return distance;
  }
  makeAdjacencyList();
  findShortestRoute();

  return finalRoute === Number.MAX_SAFE_INTEGER ? -1 : finalRoute;
}


//console.log(NearestClone([1,2,2,3], [2,3,4,5], [1,2,3,1,3], 3));

//console.log(NearestClone([1,1,2], [2,3,4], [1,2,1,1], 1));
// console.log(NearestClone([1,1,2], [2,3,4], [1,2,3,4], 2)); // -1
console.log(NearestClone([1,1,2,3], [2,3,4,5], [1,2,3,3,2], 2)); // 3
