import { findClosestOnGraph } from "./closestOnGraph";

describe("algorithms - enemies", () => {
    describe("/findClosestOnGraph", () => {
        describe("with the right data", () => {
            test("it returns the id of the closest enemy: number case", () => {
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
            test("it returns the id of the closest enemy: string case", () => {
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
            test("it returns the id of the closest enemy: negatives values case", () => {
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
            test("it calls for help if more than one enemy is closer than the rest of them", () => {
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
        });
        describe("with the wrong data", () => {
            test("it returns null if the data about users's x position is not properly set", () => {
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
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
            test("it returns null if the data about users's y position is not properly set", () => {
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
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
            test("it returns null if the data about users's position is not properly set", () => {
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
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
            test("it returns null if the data about enemies's position is not properly set", () => {
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
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
            test("it returns null if the data about enemies's name is not properly set", () => {
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
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
            test("it returns null if the data about an enemy is not properly set", () => {
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
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
            test("it returns null if the data about enemies is not properly set", () => {
                const current = {
                    x: 5,
                    y: 1,
                };
                const enemiesPos =
                    "Y en a un vers le Mordor et un autre en Russie, il aime pas les Ukrainiens";
                expect(findClosestOnGraph(current, enemiesPos)).toEqual(null);
            });
        });
    });
});
