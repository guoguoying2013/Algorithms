// input: M
// output: Int

// visited, hashtable, O(1) check on if a city is visited

// iterating starting from city 0 to the end city
   // if city visited skip
   // if not visited, 
      //BFS, during the BFS marked the citites that were visited
      // number of province +1

// BFS helper function, input: M, current City, mark all connected city visited


const findCircleNum = (M) => {
  
    const dfs = (currCity) => {
      let connections = M[currCity];
      for (let c = 0; c < connections.length; c++) {
        if(connections[c] === 1 && visited[c] === undefined) {
          visited[c] = true;
          dfs(c);
        }
      }
    };
    
    
    
    let visited = {};
    let numOfPro = 0;
    for (let i = 0; i < M.length; i++) {
      let currCity = i;
      if(visited[i] === undefined) {
        numOfPro++;
        visited[i] = true;
        dfs(currCity);
      }
    }
    
    return numOfPro;
  }
  
  // test
  let testInput = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]];
  console.log(findCircleNum(testInput));