export const findPivotIndex = (nums) => {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum = leftSum + nums[i];
  }

  return -1;
};
