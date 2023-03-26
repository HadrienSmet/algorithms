// You get an array of numbers. Those numbers represents the height of a rectangle wich has a width of 1.
//This is how to find the biggest area.

const shapesExample = [3, 4, 1, 9, 8, 6, 7];

export const findBiggestArea = (shapeArr) => {
    let indexesWithinHeight = [];
    let areas = [];

    for (let i = 0; i < shapeArr.length; i++) {
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

    return answer;
};
