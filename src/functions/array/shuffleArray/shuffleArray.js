//nums.length === 2n
export const shuffleArray = (nums, n) => {
    const ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[i + n]);
    }

    return ans;
};
