// Dynamic programming: https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns

// brute force
// let result = 0;
// iterate over the given array
  // find out the max on left side, from beginning to current element
  // find out the max on right side, from current element to the end
  // add min(left_max, right_max) - height[i] to result

// time complexity: O(n2)
// space complexity: O(1) extra space

// Dynamic programming

var trap = function(height) {
  const leftMaxHeight = [];
  leftMaxHeight[0] = height[0]
  for (let i = 1; i < height.length; i++) {
    leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i]);
  };
  const rightMaxHeigt = [];
  rightMaxHeigt[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMaxHeigt[i] = Math.max(rightMaxHeigt[i + 1], height[i]);
  };
  let rain = 0;
  for (let j = 0; j < height.length; j++) {
    let lowerBar = Math.min(leftMaxHeight[j], rightMaxHeigt[j]);
    if (lowerBar > height[j]) {
        rain = lowerBar - height[j] + rain;
    } else {
        continue;
    }
  }
  return rain;
};

// time complexity O(n)

// Another way to solve it:
// var trap = function(height) {
//     let landArea = 0;
//     let maxFromLeft = 0;
//     let maxAreaFromLeft = 0;
    
//     for (let h of height) {
//         landArea += h;
//         maxFromLeft = Math.max(maxFromLeft, h);
//         maxAreaFromLeft += maxFromLeft;
//     }
    
//     let maxFromRight = 0;
//     let maxAreaFromRight = 0;
    
//     for (let i = height.length - 1; i >= 0; i--) {
//         maxFromRight = Math.max(maxFromRight, height[i]);
//         maxAreaFromRight += maxFromRight;
//     }
    
//     const boundingArea = height.length * maxFromLeft;
//     const leftVoid = boundingArea - maxAreaFromLeft;
//     const rightVoid = boundingArea - maxAreaFromRight;
//     return boundingArea - leftVoid - rightVoid - landArea;
// };
