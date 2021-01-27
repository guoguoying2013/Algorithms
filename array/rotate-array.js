/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

// solution 1
// var rotate = function(nums, k) {
//     let remainder = k%nums.length
//     while (remainder > 0){
//         let end = nums[nums.length - 1];
//         for (let i = nums.length - 1; i > 0 ; i--)  {
//             nums[i] = nums[i - 1];
//         }
//         nums[0] = end;
//         remainder --;
//     }
//     return nums;
// };
// time complexity O(n)
// space complexity O(1)

var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
};
// time complexity O(n)
// space complexity O(k)

/*
Using Reverse
Original List                   : 1 2 3 4 5 6 7
After reversing all numbers     : 7 6 5 4 3 2 1
After reversing first k numbers : 5 6 7 4 3 2 1
After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result
*/

// sample
// let arr = [1, 2, 3, 4, 5, 6, 7];