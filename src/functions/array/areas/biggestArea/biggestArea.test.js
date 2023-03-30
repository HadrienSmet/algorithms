import { findBiggestArea } from "./biggestArea";

test("Find biggest area: regular case", () => {
    const shapesExample = [3, 4, 1, 9, 8, 6, 7];
    expect(findBiggestArea(shapesExample)).toEqual(24);
});
test("Find biggest area: highest rectangle case", () => {
    const shapesExample = [30, 4, 2, 9, 8, 6, 7];
    expect(findBiggestArea(shapesExample)).toEqual(30);
});
test("Find biggest area: wrong height data case", () => {
    const shapesExample = [30, "4", 10, 9, 8, 6, 7];
    expect(findBiggestArea(shapesExample)).toEqual(
        "Each height must be given with the number type"
    );
});
test("Find biggest area: wrong  data case", () => {
    const shapesExample = "un petit, un grand et un un petit peu moins grand";
    expect(findBiggestArea(shapesExample)).toEqual(
        "The data is not properly set. This function accept only an array of number as parameter"
    );
});
test("Find biggest area: negative number case", () => {
    const shapesExample = [30, 4, -2, 9, 8, 6, 7];
    expect(findBiggestArea(shapesExample)).toEqual(
        "Each height must be a positive number"
    );
});
test("Find biggest area: more than one area is the biggest case", () => {
    const shapesExample = [30, 4, 2, 6, 9, 8, 6, 7];
    expect(findBiggestArea(shapesExample)).toEqual(
        "We have more than one winner!"
    );
});
