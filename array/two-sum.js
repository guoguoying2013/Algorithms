/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

input: array ints, int
output: array of arrays, each sub array [index, index]

nested array, O(n2)
two-pass hash, O(n)

[2, 7, 11, 15] , no dups
9-2, 9 -7, 9 -11, 9 -15
map
key: target - arr[i]
val: i
key and val cannot be equal


One-pass Hash Table

*/

function twoSum (nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if(hashTable[nums[i]] !== undefined) {
            return [i, hashTable[nums[i]]];
        }
        let key = target - nums[i];
        hashTable[key] = i;
    }
    return [];
    // const HashMap = {};
    // nums.map((num, i) => {HashMap[target - num] = i});
    // for (let i = 0; i < nums.length; i++) {
    //   if(HashMap[nums[i]] !== undefined) {
    //     if (i !== HashMap[nums[i]]) return [i, HashMap[nums[i]]];
    //   }
    // }
    // return [];
  }
  
  //test
  console.log(twoSum([2,7,11,15], 9));
  console.log(twoSum([], 9));
  console.log(twoSum([2,3], 4));