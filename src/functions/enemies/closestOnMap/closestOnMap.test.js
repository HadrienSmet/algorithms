import { findClosestEnemy } from "./closestOnMap";

test("closest enemy from array: regular case", () => {
    const arrayForTest = ["0100", "0000", "0200", "0002"];
    expect(findClosestEnemy(arrayForTest)).toEqual(2);
});
test("closest enemy from array: more than one enemy case", () => {
    const arrayForTest = ["0102", "0000", "0200", "0002"];
    expect(findClosestEnemy(arrayForTest)).toEqual(
        "Mayday, Mayday! It's a trap!"
    );
});

test("closest enemy from array: no ally case", () => {
    const arrayForTest = ["0002", "0000", "0200", "0002"];
    expect(findClosestEnemy(arrayForTest)).toEqual(
        "There might be some enemies but there isn't any ally"
    );
});
test("closest enemy from array: no enemy case", () => {
    const arrayForTest = ["0001", "0000", "0000", "0000"];
    expect(findClosestEnemy(arrayForTest)).toEqual("Zone clear!");
});

test("closest enemy from array: no enemy and no ally case", () => {
    const arrayForTest = ["0000", "0000", "0000", "0000"];
    expect(findClosestEnemy(arrayForTest)).toEqual(
        "Dude I think you got lost... There isn't anything here"
    );
});

test("closest enemy from array: no data case", () => {
    const arrayForTest = [];
    expect(findClosestEnemy(arrayForTest)).toEqual("No data");
});

test("closest enemy from array: wrong data case", () => {
    const arrayForTest = ["0030", "0000", "0000", "0000"];
    expect(findClosestEnemy(arrayForTest)).toEqual(
        "The data contains an element that is not '0', '1' or '2' of type string"
    );
});
