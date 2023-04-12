const timeLimit = (fn, t) => {
    return async (...args) => {
        let original = fn(...args);
        const timeOut = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });
        return Promise.race([original, timeOut]);
    };
};
