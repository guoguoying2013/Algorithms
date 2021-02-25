/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Example:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
*/

const removeDuplicate = (nums) => {
    // two pointers

    // edge case when input array is null or empty
    if (nums.length === 0 || nums === null) return 0;
    let slow = 0 // slow pointer starts at index 0
    for (let i = 1; i < nums.length; i++) {
        // i is the fast pointer, starts from index 1
        if (nums[slow] !== nums[i]) {
            slow ++;
            nums[slow] = nums[i];
        }
    }
    return slow + 1;
}