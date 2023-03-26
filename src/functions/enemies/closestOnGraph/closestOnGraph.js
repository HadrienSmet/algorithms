//How to find the closest enemy from data provided by x and y coordinates

export const findClosestOnGraph = (currPos, enemiesArr) => {
    let enemiesDist = [];
    if (typeof currPos.x !== "number" || typeof currPos.y !== "number") {
        return "The data about the user's position is not properly set. (x: number; y:number;)";
    }

    for (let i = 0; i < enemiesArr.length; i++) {
        if (
            enemiesArr[i].x === undefined ||
            enemiesArr[i].y === undefined ||
            enemiesArr[i].id === undefined
        ) {
            return "The data about an enemy is not properly set. (id: string | number; x: number; y:number;)";
        }
        if (
            typeof enemiesArr[i].x !== "number" ||
            typeof enemiesArr[i].y !== "number"
        ) {
            return "The data about an enemy's position is not properly set. (id: string | number; x: number; y:number;)";
        }
        if (
            typeof enemiesArr[i].id !== "number" &&
            typeof enemiesArr[i].id !== "string"
        ) {
            return "The data about an enemy's name is not properly set. (id: string | number; x: number; y:number;)";
        }

        const diffX = Math.abs(enemiesArr[i].x - currPos.x);
        const diffY = Math.abs(enemiesArr[i].y - currPos.y);
        const totalDist = diffX + diffY;

        const enemyData = {
            id: enemiesArr[i].id,
            distance: totalDist,
        };

        enemiesDist.push(enemyData);
    }

    const closestToFurthest = enemiesDist.sort(
        (a, b) => a.distance - b.distance
    );
    const closestToFurthestLessAnswer = closestToFurthest.slice(
        1,
        closestToFurthest.length
    );
    if (
        closestToFurthestLessAnswer.findIndex(
            (el) => el.distance === closestToFurthest[0].distance
        ) !== -1
    ) {
        return "Mayday, Mayday!! Tell my children I love them";
    }
    const answer = closestToFurthest[0].id;

    return answer;
};
