import { findClosestToZero } from "./closestToZero";

test("find the closest temperature to zero: regular case", () => {
    let testExample = [-9, 5, 24, 29, 8, 3, 7];
    expect(findClosestToZero(testExample)).toEqual(3);
});
