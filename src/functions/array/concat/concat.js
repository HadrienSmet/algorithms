// Better time complexity but bigger memory
export const concatArr = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) return null;
    return [...nums, ...nums];
};

//lower memory but time complexity increased
/* 
const concatArr = (nums) => {
    return nums.concat(nums);
}
*/
