//time complexity: O(n)
//memory: O(n)
export const twoSum = (nums, target) => {
    const map = new Map();
    if (nums.length === 0 || typeof target !== "number" || target < 0) {
        return null;
    }
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number" || nums[i] < 0) {
            return null;
        }
        const x = target - nums[i];

        if (map.has(x)) {
            return [map.get(x), i];
        }

        map.set(nums[i], i);
    }

    return [];
};
