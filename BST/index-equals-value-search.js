/*
Given a sorted array arr of distinct integers,
write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1
if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.
*/
function indexEqualsValueSearch(arr) {
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    i = Math.floor((start + end) / 2);
    if (arr[i] - i < 0) {
      start = i + 1;
    } else if (
        arr[i] - i == 0 && (
          (i == 0) || (arr[i - 1] - (i -  1) < 0)
        )
      ) {
      return i;
    } else {
      end = i - 1;
    }
  }
  return -1;
}
// time complexity O(logN)
// space complexity O(1)
  
console.log(indexEqualsValueSearch([-8,0,2,5]));
console.log(indexEqualsValueSearch([0]));