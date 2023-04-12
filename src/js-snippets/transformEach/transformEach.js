export const transformEach = (arr, fn) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(fn(arr[i], i));
    }
    return answer;
};
