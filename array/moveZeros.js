/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const moveZeroes = function(nums) {
    // Array Transformation
    // [1,3,12,3,12]
    //           |    <= fast pointer iterate over arr
    //          |     <= slower pointer check the last non zero indexf
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZero] = nums[i];
            lastNonZero++;
        }
    }
    for (let i = lastNonZero; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
};