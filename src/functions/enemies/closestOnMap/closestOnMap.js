//How to find the closest enemy from an array made of multiples digits understood betwwen 0 and 2. 0 represents an empty space, 1 represents the character and 2 represents the enemies.

export const findClosestEnemy = (mapArray) => {
    let enemiesPositions = [];
    let enemiesDistances = [];
    let position = {
        x: -1,
        y: -1,
    };

    if (mapArray[0] === undefined) {
        return "No data";
    }

    for (let i = 0; i < mapArray.length; i++) {
        const splittedElement = mapArray[i].split("");
        const isEnemy = splittedElement.includes("2");
        const positionX = splittedElement.findIndex(
            (element) => element === "1"
        );

        const normalyEmptyArray = splittedElement
            .filter((element) => element !== "0")
            .filter((element) => element !== "1")
            .filter((element) => element !== "2");

        if (normalyEmptyArray[0] !== undefined) {
            return "The data contains an element that is not '0', '1' or '2' of type string";
        }

        if (isEnemy === true) {
            for (let j = 0; j < splittedElement.length; j++) {
                if (splittedElement[j] === "2")
                    enemiesPositions.push({
                        x: j,
                        y: i,
                    });
            }
        }
        if (positionX !== -1) {
            position = {
                x: positionX,
                y: i,
            };
        }
    }

    for (let i = 0; i < enemiesPositions.length; i++) {
        const diffX =
            position.x <= enemiesPositions[i].x
                ? enemiesPositions[i].x - position.x
                : position.x - enemiesPositions[i].x;
        const diffY =
            position.y <= enemiesPositions[i].y
                ? enemiesPositions[i].y - position.y
                : position.y - enemiesPositions[i].y;
        const totalDiff = diffX + diffY;
        enemiesDistances.push(totalDiff);
    }

    if (enemiesDistances[0] === undefined) {
        if (position.x === -1) {
            return "Dude I think you got lost... There isn't anything here";
        } else {
            return "Zone clear!";
        }
    }

    const orderedArray = enemiesDistances.sort((a, b) => a - b);
    const orderedArrayLessAnswer = orderedArray.splice(1, orderedArray.length);
    const areTwoEnemies = orderedArrayLessAnswer.findIndex(
        (element) => element === orderedArray[0]
    );

    if (position.x === -1) {
        return "There might be some enemies but there isn't any ally";
    }

    const answer =
        areTwoEnemies !== -1 ? "Mayday, Mayday! It's a trap!" : orderedArray[0];

    return answer;
};
