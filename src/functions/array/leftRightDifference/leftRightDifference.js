export const leftRigthDifference = (nums) => {
    const answer = [];

    for (let i = 0; i < nums.length; i++) {
        const leftArr = nums.slice(0, i);
        const rightArr = nums.slice(i + 1, nums.length);
        const leftSum =
            leftArr.length !== 0
                ? leftArr.reduce((acc, curr) => acc + curr)
                : 0;
        const rightSum =
            rightArr.length !== 0
                ? rightArr.reduce((acc, curr) => acc + curr)
                : 0;
        answer.push(Math.abs(leftSum - rightSum));
    }

    return answer;
};
/*
var leftRigthDifference = function(nums) {
    const sum = nums.reduce((cur, next) => cur + next);
    let result = new Array(nums.lenght);

    let left = 0;
    let right = sum;
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        result[i] = Math.abs(left - right);
        left += nums[i];
    }

    return result;
};
*/
