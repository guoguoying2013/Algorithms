/*
You are given a sorted array consisting of only integers where every element appears exactly twice,
except for one element which appears exactly once. Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space.
*/

var singleNonDuplicate = function(nums) {
  if (nums.length == 1) return nums[0];
  function bsa(start, end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == nums[mid - 1]) return mid % 2 ? bsa(mid + 1, end) : bsa(start, mid);
    if (nums[mid] == nums[mid + 1]) return mid % 2 ? bsa(start, mid - 1) : bsa(mid, end);
    return nums[mid];
  }
  return bsa(0, nums.length - 1);
};