//How to find the closest enemy from an array made of multiples digits understood betwwen 0 and 2. 0 represents an empty space, 1 represents the character and 2 represents the enemies.

export const findClosestEnemy = (mapArray) => {
    let enemiesPositions = [];
    let enemiesDistances = [];
    let position = {
        x: -1,
        y: -1,
    };

    for (let i = 0; i < mapArray.length; i++) {
        const splittedElement = mapArray[i].split("");
        const isEnemy = splittedElement.includes("2");
        const positionX = splittedElement.findIndex(
            (element) => element === "1"
        );

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

    const orderedArray = enemiesDistances.sort((a, b) => a - b);
    const orderedArrayLessAnswer = orderedArray.splice(1, orderedArray.length);
    const areTwoEnemies = orderedArrayLessAnswer.findIndex(
        (element) => element === orderedArray[0]
    );

    const answer = areTwoEnemies === -1 ? "it's a trap!" : orderedArray[0];

    return answer;
};
