
//n number of cities
//c_lib cost of library
//c_road cost of road
//cities
function roadsAndLibraries(n, c_lib, c_road, cities) {
  const adjacentList = findAdjCities(cities);


  //min of libraries needed depending on roads connections
  const [libs, noCities] = getNoLibsCities(adjacentList);
  console.log('num libs', libs);
  const remainingLibs = (n - noCities) * c_lib;
  const costLibsRoad = (libs * c_lib) + ((noCities - 1) * c_road) + remainingLibs;

  const costCreationLibsEachCity = noCities * c_lib;


  return costCreationLibsEachCity < costLibsRoad ?
    costCreationLibsEachCity : costLibsRoad;
}


function getNoLibsCities(adjacentList) {
  const visitedNodes = new Set();
  let noLibs = 0; //independent Graphs

  Object.keys(adjacentList).forEach(node => {
    if(!visitedNodes.has(+node)) {
      dfs(visitedNodes, node, adjacentList);
      noLibs++;
    }
  });
  console.log(visitedNodes.size);
  return [noLibs, visitedNodes.size];
}

function dfs(visitedNodes, node, adjacentList) {
  if(visitedNodes.has(+node)) return;

  visitedNodes.add(+node);

  for(const adj of adjacentList[node]) {
    dfs(visitedNodes, adj, adjacentList)
  }
}

function findAdjCities(cities) {
  const adjacentList = { };
  for(const city of cities) {
    if(adjacentList[city[0]] == null) adjacentList[city[0]] = [];
    if(adjacentList[city[1]] == null) adjacentList[city[1]] = [];

    adjacentList[city[0]].push(city[1]);
    adjacentList[city[1]].push(city[0]);
  }
  return adjacentList;
}

//console.log(roadsAndLibraries(3, 2, 1, [ [1, 2], [2,3], [3,1] ]));
console.log(roadsAndLibraries(5, 6, 1, [
  [1, 2],
  [1, 3],
  [1, 4]]));