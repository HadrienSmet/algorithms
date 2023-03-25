//How to find the closest enemy from data provided by x and y coordinates
const current = {
    x: 20,
    y: 20,
};
const enemiesPos = [
    {
        id: 0,
        x: 5,
        y: 1,
    },
    {
        id: 1,
        x: 45,
        y: 60,
    },
    {
        id: 2,
        x: 50,
        y: 40,
    },
];

export const findClosestOnGraph = (currPos, enemiesArr) => {
    let enemiesDist = [];

    for (let i = 0; i < enemiesArr.length; i++) {
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
    const answer = closestToFurthest[0].id;
    console.log(closestToFurthest);
    console.log(answer);
};
