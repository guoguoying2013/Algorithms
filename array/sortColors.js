/* 
https://leetcode.com/problems/sort-colors/
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

Input: nums = [2,0,2,1,1,0]

Approach I: bruteforce
first pass: found 2
second pass: inserting in 2, found 2
third pass: inserting at 2 + 2


Approach II: one pass
Input: nums = [2,0,2,1,1,0] 
Input: nums = [0,1,1,2,2,0]             
                       |
0:             |
1:               |
2:                       |


Output: [0,0,1,1,2,2]

Approach III:
two pointers: left and right.
whenever see 0, delete and insert in front, then advance the left pointer;
whenever see 2, delete and insert in the end, then advance the right pointer;
whenever see 1, do nothing, advance oen of the pointers;
Input: nums = [2,0,2,1,1,0]
               |
                         |
Time: O(n^2)
Space: O(1)




Follow up:

Could you solve this problem without using the library's sort function?
Could you come up with a one-pass algorithm using only O(1) constant space?

*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Input: nums = [0,0,1,1,2,2]
 
 */
var sortColors = function(nums) {
    let left = 0;  
    let right = nums.length - 1;  
  while(left < right) { 
    if(nums[left] === 0) {
      nums.splice(left, 1);
      nums.unshift(0)
      left ++;
    } else if(nums[right] === 0) {
      nums.splice(right, 1);
      nums.unshift(0)
      left ++;
    } else if(nums[left] === 2) {
      nums.splice(left, 1);
      nums.push(2);
      right --;
    } else if(nums[right] === 2) {
      nums.splice(right, 1);
      nums.push(2)
      right --;
    } else {
      right --;
    }


  }

  return nums;
};