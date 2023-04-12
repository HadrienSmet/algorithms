//same algorithms than the biggestArea but with a much better time complexity

const maxArea = (height) => {
    let answer = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    while (leftIndex < rightIndex) {
        const leftHeight = height[leftIndex];
        const rightHeight = height[rightIndex];
        const width = rightIndex - leftIndex;
        const smallerHeight =
            leftHeight < rightHeight ? leftHeight : rightHeight;
        const storedWater = smallerHeight * width;
        if (storedWater > answer) answer = storedWater;
        smallerHeight == leftHeight ? leftIndex++ : rightIndex--;
    }
    return answer;
};

// const maxArea = (height) => {
//     let ans = 0
//     let i = 0;
//     let j = height.length - 1
//     while (i < j) {
//         const lh = height[i]
//         const rh = height[j]
//         const w = j - i;
//         const sh = lh < rh ? lh : rh;
//         const curr = sh * w
//         if (curr > ans) ans = curr
//         sh == lh ? i++ : j--;
//     }
//     return ans
// };
