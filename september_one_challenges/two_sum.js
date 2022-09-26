const twoSum = function (nums, target) {
  let ansArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (target === nums[j] + nums[i] && i !== j) {
        ansArray.push(j);
        ansArray.push(i);
        return ansArray;
      }
    }
  }
};
console.log(twoSum([2, 7, 1, 15], 9));
console.log(twoSum([3, 2, 4], 6));
