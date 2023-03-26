import { findClosestOnGraph } from "./closestOnGraph";

test("closest enemy from graph: regular number id case", () => {
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
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(0);
});

test("closest enemy from graph: regular string id case", () => {
    const current = {
        x: 5,
        y: 5,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: 3,
            y: 1,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual("Jake");
});

test("closest enemy from graph: more than one enemy case", () => {
    const current = {
        x: 5,
        y: 5,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: 5,
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "Mayday, Mayday!! Tell my children I love them"
    );
});

test("closest enemy from graph: wrong users's x position case", () => {
    const current = {
        x: "5",
        y: 5,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: 5,
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "The data about the user's position is not properly set. (x: number; y:number;)"
    );
});

test("closest enemy from graph: wrong users's y position case", () => {
    const current = {
        x: 5,
        y: true,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: 5,
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "The data about the user's position is not properly set. (x: number; y:number;)"
    );
});
test("closest enemy from graph: wrong users's position case", () => {
    const current = "Paris";
    const enemiesPos = [
        {
            id: "Jhon",
            x: 5,
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "The data about the user's position is not properly set. (x: number; y:number;)"
    );
});

test("closest enemy from graph:  wrong enemy's position case", () => {
    const current = {
        x: 5,
        y: 1,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: "5",
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "The data about an enemy's position is not properly set. (id: string | number; x: number; y:number;)"
    );
});
test("closest enemy from graph: wrong enemy's name case", () => {
    const current = {
        x: 5,
        y: 1,
    };
    const enemiesPos = [
        {
            id: true,
            x: 5,
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        {
            id: "Jake",
            x: 5,
            y: 4,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "The data about an enemy's name is not properly set. (id: string | number; x: number; y:number;)"
    );
});
test("closest enemy from graph: wrong enemy's data case", () => {
    const current = {
        x: 5,
        y: 1,
    };
    const enemiesPos = [
        {
            id: "Jake",
            x: 5,
            y: 6,
        },
        {
            id: "Mike",
            x: 9,
            y: 6,
        },
        false,
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual(
        "The data about an enemy is not properly set. (id: string | number; x: number; y:number;)"
    );
});
test("closest enemy from graph: with negatives values case", () => {
    const current = {
        x: -25,
        y: 10,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: 5,
            y: -6,
        },
        {
            id: "Mike",
            x: 24,
            y: -11,
        },
        {
            id: "Jake",
            x: -19,
            y: 6,
        },
        {
            id: "Billy",
            x: 9,
            y: 6,
        },
    ];
    expect(findClosestOnGraph(current, enemiesPos)).toEqual("Jake");
});
