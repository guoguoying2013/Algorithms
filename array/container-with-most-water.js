const maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
      let currentArea = (right - left) * Math.min(height[right], height[left]);
      maxArea = currentArea > maxArea ? currentArea : maxArea;
      if (height[left] < height[right]) {
         left += 1;
      } else if (height[left] > height[right]) {
          right -= 1;
      } else {
          right -= 1;
      }
    };
    return maxArea;
};

// time complexity O(n), linear
// space complexity O(1), constant space is used.