/*
Given an array arr of distinct integers and a nonnegative integer k, 
write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, 
such that x - y = k. If no such pairs exist, return an empty array.
Note: the order of the pairs in the output array should maintain the order of the y element in the original array.

input: arr, k
output: arr

goal: returns an array of all pairs
// map = {};
// loop through arr
  // x distinct =>  x - k distinct => map[x-k] = x;
// loop through arr
 // key y exist in map, if true push [map[y], y] to result
// return result

time complexity: O(n);
space complexity: O(n);
*/

function findPairsWithGivenDifference(arr, k) {
  const map = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    map[x - k] = x;
  }
  for (let j = 0; j < arr.length; j++) {
    let y = arr[j];
    if(map[y] !== undefined) { // if map[y] = 0, 0 evaluate to false
      result.push([map[y], y]);
    }
  }
  return result;
}

console.log('input: [0,-1,-2,2,1], 1; output: ', findPairsWithGivenDifference([0,-1,-2,2,1], 1));
// should be [[1,0],[0,-1],[-1,-2],[2,1]]