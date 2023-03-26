//How to find the closest temperature to zero
//If two temperatures are equal return the one that is positive
const example = [-9, 5, 24, 29, 8, 3, 7];
export const findClosestToZero = (temperatureArr) => {
    let currentClosest = undefined;
    for (let i = 0; i < temperatureArr.length; i++) {
        if (currentClosest === undefined) {
            currentClosest = temperatureArr[i];
        } else {
            if (Math.abs(currentClosest) > Math.abs(temperatureArr[i])) {
                currentClosest = temperatureArr[i];
            }
            if (Math.abs(currentClosest) === Math.abs(temperatureArr[i])) {
                const positiveOne =
                    currentClosest < temperatureArr[i]
                        ? temperatureArr[i]
                        : currentClosest;
                currentClosest = positiveOne;
            }
        }
    }
    const answer = currentClosest;
    return answer;
};
