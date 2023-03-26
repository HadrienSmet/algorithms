// You get an array of numbers. Those numbers represents the height of a rectangle wich has a width of 1.
//This is how to find the biggest area.

export const findBiggestArea = (shapeArr) => {
    let indexesWithinHeight = [];
    let areas = [];
    if (!Array.isArray(shapeArr)) {
        return "The data is not properly set. This function accept only an array of number as parameter";
    }

    for (let i = 0; i < shapeArr.length; i++) {
        if (typeof shapeArr[i] !== "number") {
            return "Each height must be given with the number type";
        }
        if (shapeArr[i] < 0) {
            return "Each height must be a positive number";
        }
        let area = {
            height: shapeArr[i],
            indexes: [],
        };
        for (let j = 0; j < shapeArr.length; j++) {
            if (shapeArr[i] <= shapeArr[j]) {
                area.indexes.push(j);
            }
        }
        indexesWithinHeight.push(area);
    }

    for (let i = 0; i < indexesWithinHeight.length; i++) {
        const currentElement = indexesWithinHeight[i];
        const currentIndexes = currentElement.indexes;
        let areasWithThatHeight = [];
        let currentArea = undefined;

        for (let j = 0; j < currentIndexes.length; j++) {
            if (j === 0) {
                currentArea = currentElement.height;
                if (j === currentIndexes.length - 1) {
                    areasWithThatHeight.push(currentArea);
                    currentArea = 0;
                }
                if (currentIndexes[j + 1] - currentIndexes[j] !== 1) {
                    areasWithThatHeight.push(currentArea);
                    currentArea = 0;
                }
            } else {
                currentArea += currentElement.height;
                if (j === currentIndexes.length - 1) {
                    areasWithThatHeight.push(currentArea);
                    currentArea = 0;
                } else {
                    if (currentIndexes[j + 1] - currentIndexes[j] !== 1) {
                        areasWithThatHeight.push(currentArea);
                        currentArea = 0;
                    }
                }
            }
        }
        const biggestAreaWithThatHeight = areasWithThatHeight.sort(
            (a, b) => b - a
        )[0];
        areas.push(biggestAreaWithThatHeight);
    }

    const answer = areas.sort((a, b) => b - a)[0];
    const areasWithoutAnswer = areas.slice(1, areas.length);
    if (areasWithoutAnswer.findIndex((area) => area === answer) !== -1) {
        return "We have more than one winner!";
    }

    return answer;
};
