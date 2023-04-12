export const filter = (arr, fn) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) answer.push(arr[i]);
    }
    return answer;
};
