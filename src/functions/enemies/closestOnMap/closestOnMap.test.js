import { findClosestEnemy } from "./closestOnMap";

describe("algorithms - enemies", () => {
    describe("/closestOnMap", () => {
        describe("with the right data", () => {
            test("it returns the distance if there is one enemy closer than the others", () => {
                const arrayForTest = ["0100", "0000", "0200", "0002"];
                expect(findClosestEnemy(arrayForTest)).toEqual(2);
            });
            test("it calls for help if there is more than one enemy closer than the others", () => {
                const arrayForTest = ["0102", "0000", "0200", "0002"];
                expect(findClosestEnemy(arrayForTest)).toEqual(
                    "Mayday, Mayday! It's a trap!"
                );
            });
        });

        describe("with wrong data", () => {
            test("it indicates you that there ain't no ally if the data does not contain a 1", () => {
                const arrayForTest = ["0002", "0000", "0200", "0002"];
                expect(findClosestEnemy(arrayForTest)).toEqual(
                    "There might be some enemies but there isn't any ally"
                );
            });
            test("it indicates you that there ain't no enemy if the data does not contain a 2", () => {
                const arrayForTest = ["0001", "0000", "0000", "0000"];
                expect(findClosestEnemy(arrayForTest)).toEqual("Zone clear!");
            });
            test("it indicates you that there ain't anything if the data does not contain a 1 or a 2", () => {
                const arrayForTest = ["0000", "0000", "0000", "0000"];
                expect(findClosestEnemy(arrayForTest)).toEqual(
                    "Dude I think you got lost... There isn't anything here"
                );
            });
            test("it returns null if there is no data", () => {
                const arrayForTest = [];
                expect(findClosestEnemy(arrayForTest)).toEqual(null);
            });
            test("it returns null if there is an unexpected character", () => {
                const arrayForTest = ["0030", "0000", "0000", "0000"];
                expect(findClosestEnemy(arrayForTest)).toEqual(null);
            });
        });
    });
});
