function NearestClone(graphFrom, graphTo, colors, targetColor) {
  this.graph = [];
  this.nearestRoute = -1;
  this.graphFrom = graphFrom;
  this.graphTo = graphTo;
  this.visitedNodes = new Set();
  this.colors = colors;
  this.targetColor = targetColor;

  this.setAdjacencies = () => {
    while(this.graphFrom.length > 0) {
      const nodeFrom = this.graphFrom.shift();
      const nodeTo = this.graphTo.shift();
      this.connect(nodeFrom, nodeTo);
    }
  }

  this.connect = (firstNode, secondNode) => {
    this.graph[firstNode] = this.graph[firstNode] === undefined ?
                            [secondNode] :
                            [...this.graph[firstNode], secondNode];

    this.graph[secondNode] = this.graph[secondNode] === undefined ?
                            [firstNode] :
                            [...this.graph[secondNode], firstNode];

  }

  this.findColor = () => {
    for (let i = 1; i <= this.colors.length; i++) {
      if(this.colors[i-1] === this.targetColor) {
        this.explorePaths(i);
        break;
      }
    }
  }


  this.explorePaths = (node, count = 1) => {
    if (this.visitedNodes.has(node)) {
      return;
    }

    if(count > 1 && this.colors[node-1] === this.targetColor) {
      if(this.nearestRoute === -1 || (this.nearestRoute > count)) {
        this.nearestRoute = count;
        count = 0;
      }
    }

    this.visitedNodes.add(node);

    count++;
    console.log('node', node)
    for (const edge of this.graph[node]) {
      this.explorePaths(edge, count);
    }
  }

  this.setAdjacencies();
  console.log(this.graph);
  this.findColor();
  //console.log('nearestRoute', this.nearestRoute - 1);
  return this.nearestRoute === -1 ? -1 : this.nearestRoute - 1;

}


//NearestClone([1,2,2,3], [2,3,4,5], [1,2,3,1,3], 3);
//NearestClone([1,1,2], [2,3,4], [1,2,1,1], 1);
//NearestClone([1,1,2], [2,3,4], [1,2,3,4], 2);
NearestClone([1,1,2,3], [2,3,4,5], [1,2,3,3,2], 2);
