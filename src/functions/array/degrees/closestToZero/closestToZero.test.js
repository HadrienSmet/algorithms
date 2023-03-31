import { findClosestToZero } from "./closestToZero";

describe("algorithms - array", () => {
    describe("/degrees/closestToZero", () => {
        describe("with the right data", () => {
            test("it returns the closest temperature to zero", () => {
                let testExample = [-9, 5, 24, 29, 8, 3, 7];
                expect(findClosestToZero(testExample)).toEqual(3);
            });
            test("it returns the positive temperature if two numbers are the closest to zero", () => {
                let testExample = [-9, 1, 24, 29, 8, 3, 7, -1];
                expect(findClosestToZero(testExample)).toEqual(1);
            });
            test("it returns 0 if there is a 0", () => {
                let testExample = [-9, 1, 24, 29, 8, 3, 7, -1, 0];
                expect(findClosestToZero(testExample)).toEqual(0);
            });
        });
        describe("with wrong data", () => {
            test("it returns null if one of the temperature does not have the number type", () => {
                let testExample = [-9, 1, 24, "29", 8, 3, 7, -1, 0];
                expect(findClosestToZero(testExample)).toEqual(null);
            });
            test("it returns null if the temperatures are not properly set: (number[])", () => {
                let testExample = "Il fait chaud, très chaud";
                expect(findClosestToZero(testExample)).toEqual(null);
            });
        });
    });
});
