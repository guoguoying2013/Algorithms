/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Input: grid = [

  ["1","1","1","1","0"],
    |         
  ["1","1","0","1","0"],

  ["1","1","0","0","0"],

  ["0","0","0","0","0"],

]

Output: 1

Scan the grid, 

*/

const numIslandsDFS = (grid) => {
    const H = grid.length;
    const W = grid[0].length;
    let count = 0;
    
    // nested for loop iterate over the grid
    for (let r = 0; r < H; r++) {
      for (let c = 0; c < W; c++) {
        if (grid[r][c] === '0' || grid[r][c] === '-1') continue;
        // if not island, continue
        // if island, increase count by one and call dfs to traverse grid and turn all islands to 0
        count++;
        dfs(r, c);
      }
    }
    return count;
    
    // dfs recursion
    function dfs(r, c) {
      // base cases
      if (r < 0 || c < 0 || r === H || c === W) return; // base case, out of boundary
      if (grid[r][c] === '0' || grid[r][c] === '-1') return; // base case, not island
      
      grid[r][c] = '-1'; // if island change it to water, the action to perform. 
      // check adjacent cells, recursion case
      dfs(r-1, c);
      dfs(r+1, c);
      dfs(r, c-1);
      dfs(r, c+1);
    }  
}