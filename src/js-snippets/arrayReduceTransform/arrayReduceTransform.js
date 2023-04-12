export const reduce = (nums, fn, init) => {
    let current = init;
    for (let i = 0; i < nums.length; i++) {
        current = fn(current, nums[i]);
    }
    return current;
};
