// You get an array of numbers. Those numbers represents the height of a rectangle wich has a width of 1.
//This is how to find the biggest area.

export const findBiggestArea = (shapeArr) => {
    let areasData = [];
    let maxAreas = [];
    if (!Array.isArray(shapeArr)) {
        return null;
    }

    for (let i = 0; i < shapeArr.length; i++) {
        if (typeof shapeArr[i] !== "number" || shapeArr[i] < 0) {
            return null;
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
        areasData.push(area);
    }

    for (let i = 0; i < areasData.length; i++) {
        const currentElement = areasData[i];
        const currentIndexes = currentElement.indexes;
        let areasWithThatHeight = [];
        let currentArea = 0;

        for (let j = 0; j < currentIndexes.length; j++) {
            currentArea += currentElement.height;
            if (j === currentIndexes.length - 1) {
                areasWithThatHeight.push(currentArea);
                currentArea = 0;
            }
            if (currentIndexes[j + 1] - currentIndexes[j] !== 1) {
                areasWithThatHeight.push(currentArea);
                currentArea = 0;
            }
        }
        const biggestAreaWithThatHeight = areasWithThatHeight.sort(
            (a, b) => b - a
        )[0];
        maxAreas.push(biggestAreaWithThatHeight);
    }

    const answer = maxAreas.sort((a, b) => b - a)[0];

    return answer;
};
