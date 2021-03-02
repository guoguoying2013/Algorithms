/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/


function productExceptSelf(nums) {
    //     let left = new Array(nums.length);
    //     let right = new Array(nums.length);
      
    //    for (let i = 0; i < nums.length; i++) {
    //      if (i === 0) {
    //        left[i] = 1;
    //      } else {
    //        left[i] = left[i - 1] * nums[i - 1]
    //      }
    //    }
      
    //   for (let j = nums.length - 1; j >= 0; j--) {
    //     if(j === nums.length - 1) {
    //       right[nums.length - 1] = 1;
    //     } else {
    //       right[j] = right[j + 1] * nums[j + 1];
    //     }
    //   }
      
    //   let output = [];
    //   for (let k = 0; k < nums.length; k++) {
    //     output[k] = left[k] * right[k];
    //   }
      
    //   return output;
      
    // we simply use a variable to keep track of the running product of elements to the right and we keep updating the answer array by doing answer[i] = answer[i] * Ranswer[i]=answer[i]∗R
      
      let output = new Array(nums.length);
      
      for (let i = 0; i < nums.length; i++) {
         if (i === 0) {
           output[i] = 1;
         } else {
           output[i] = output[i - 1] * nums[i - 1]
         }
       }
      
      let runningProduct = 1;
      for (let j = nums.length - 1; j >= 0; j --) {
        if(j === nums.length - 1) {
          output[j] = output[j] * runningProduct;
        } else {
          runningProduct = runningProduct * nums[j + 1];
          output[j] = output[j] * runningProduct;
        }
      }
      
      return output;
    };
    
    // test
    let testInput = [1,2,3,4]
    console.log(productExceptSelf(testInput), ' should be [24,12,8,6] ');