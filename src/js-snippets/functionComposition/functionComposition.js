const compose = (functions) => {
    return (x) => {
        let answer = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            answer = functions[i](answer);
        }
        return answer;
    };
};
