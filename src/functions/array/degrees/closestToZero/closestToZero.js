//How to find the closest temperature to zero
//If two temperatures are equal return the one that is positive
export const findClosestToZero = (temperatureArr) => {
    let currentClosest = undefined;

    if (!Array.isArray(temperatureArr)) {
        return "The data provided are not properly set. (number[])";
    }

    for (let i = 0; i < temperatureArr.length; i++) {
        if (typeof temperatureArr[i] !== "number") {
            return "A temperature does not have the number type";
        }

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
