import { findClosestToZero } from "./closestToZero";

test("find the closest temperature to zero: regular case", () => {
    let testExample = [-9, 5, 24, 29, 8, 3, 7];
    expect(findClosestToZero(testExample)).toEqual(3);
});
test("find the closest temperature to zero: return the positive one case", () => {
    let testExample = [-9, 1, 24, 29, 8, 3, 7, -1];
    expect(findClosestToZero(testExample)).toEqual(1);
});
test("find the closest temperature to zero: we have a winner case", () => {
    let testExample = [-9, 1, 24, 29, 8, 3, 7, -1, 0];
    expect(findClosestToZero(testExample)).toEqual(0);
});
test("find the closest temperature to zero: wrong temperature case", () => {
    let testExample = [-9, 1, 24, "29", 8, 3, 7, -1, 0];
    expect(findClosestToZero(testExample)).toEqual(
        "A temperature does not have the number type"
    );
});
test("find the closest temperature to zero: wrong data case", () => {
    let testExample = "Il fait chaud, très chaud";
    expect(findClosestToZero(testExample)).toEqual(
        "The data provided are not properly set. (number[])"
    );
});
