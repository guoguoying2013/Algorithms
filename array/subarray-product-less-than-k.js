/*
Count and print the number of (contiguous) subarrays
where the product of all the elements in the subarray is less than k.
*/

var numSubarrayProductLessThanK = function(nums, k) {
  let count = 0
  let j = 0 
  let i = 0 
  let product = 1
  
  while (i < nums.length && j < nums.length) {
    if (product * nums[i] < k) {
      product = product * nums[i];
      count = count + (i - j + 1);
      i++;
    } else {
      if (nums[j]) {
        product = product / nums[j];
        j++;
      }
    }
  }
  
  return count;
}

// var numSubarrayProductLessThanK = function(nums, k) {
//     let continueSearching = true;
//     let maxLenSubArray = 1;
//     let counter = 0;
//     if (nums.length === 0) {
//         return counter;
//     }
//     while (continueSearching) {
//         continueSearching = false;
//         for (let i = 0; i < nums.length - maxLenSubArray + 1; i++) {
//             let subArray = nums.slice(i, i + maxLenSubArray)
//             let productOfSubArray = 1;
//             console.log(subArray);
//             for (let j = 0; j < subArray.length; j++) {
//                 productOfSubArray *= subArray[j];
//             }
//             if (productOfSubArray < k) {
//                 counter ++;
//                 continueSearching = true;
//             }
//         }
//         maxLenSubArray ++;
//     }