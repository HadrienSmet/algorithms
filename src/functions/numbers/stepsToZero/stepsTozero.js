export const numberOfSteps = (num) => {
    let ans = 0;
    let current = num;
    while (current > 0) {
        ans++;
        if (current % 2 === 0) {
            current = current / 2;
        } else {
            current--;
        }
    }
    return ans;
};
