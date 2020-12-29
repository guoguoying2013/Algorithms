/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 * 
 * input: rotated sorted array
 * output: num
 * 
 * right is larger than left except the least number and the max num.
 */


// Binary search, divide and conquer approach
// Unlike during a regular binary search, we need an additional check to decide whether target is within the rotated side or the other side of arr.
// variables:
// target
// start
// end
// middle
var rotatedArraySearch = function (rotated, target) {
  let start = 0, end = rotated.length - 1;
  while(start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (rotated[middle] === target) {
      return middle;
    }
    // check which side has the pivot point and decide the new range for search
    if(rotated[start] <= rotated[middle]) {
      if(rotated[start] <= target && target < rotated[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if(rotated[middle] < target && target <= rotated[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return null;
};
  
//test
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5);
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null);