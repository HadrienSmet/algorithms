import { findBiggestArea } from "./biggestArea";

describe("algorithms - array", () => {
    describe("areas/biggestArea", () => {
        describe("with right data", () => {
            test("it returns the biggest area: first case", () => {
                const shapesExample = [3, 4, 1, 9, 8, 6, 7];
                expect(findBiggestArea(shapesExample)).toEqual(24);
            });
            test("it returns the biggest area: second case", () => {
                const shapesExample = [30, 4, 2, 9, 8, 6, 7];
                expect(findBiggestArea(shapesExample)).toEqual(30);
            });
        });
        describe("with wrong data", () => {
            test("it returns null if one of the element does not have the number type", () => {
                const shapesExample = [30, "4", 10, 9, 8, 6, 7];
                expect(findBiggestArea(shapesExample)).toEqual(null);
            });
            test("it returns null if the data is not properly set", () => {
                const shapesExample =
                    "un petit, un grand et un un petit peu moins grand";
                expect(findBiggestArea(shapesExample)).toEqual(null);
            });
            test("it returns null if one of the element has a negative value", () => {
                const shapesExample = [30, 4, -2, 9, 8, 6, 7];
                expect(findBiggestArea(shapesExample)).toEqual(null);
            });
        });
    });
});
