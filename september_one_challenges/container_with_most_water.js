let maxArea = function (height) {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    let min = Math.min(height[start], height[end]);
    let diff = end - start;
    let area = min * diff;
    if (area > max) {
      max = area;
    }

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
