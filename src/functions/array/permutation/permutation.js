//Better time complexity but much higher weight for the memory
export const permutation = (nums) => {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }
    return ans;
};
//Much better memory but the time complexity increased a little bit
// export const permutation = (nums) => {
//     const result = new Array(nums.length);
//     for (let i = 0; i < nums.length; i++) {
//       result[i] = nums[nums[i]];
//     }
//     return result;
//   };
