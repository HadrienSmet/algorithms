import { putSomeSpaces } from "./putSomeSpaces";

describe("algorithms - strings", () => {
    describe("/putSomeSpaces", () => {
        describe("with the right arguments", () => {
            test("it returns the right sentence", () => {
                const firstString = "leroidespiratesceseramoi";
                const scdString = "pirates sera le moi ce roi des";

                expect(putSomeSpaces(firstString, scdString)).toEqual(
                    "le roi des pirates ce sera moi"
                );
            });
            test("it returns the right sentence and the uppercases", () => {
                const firstString = "Leroidespiratesceseramoi,MonkeyDLuffy";
                const scdString =
                    "Monkey pirates sera Luffy Le moi, ce roi des D";

                expect(putSomeSpaces(firstString, scdString)).toEqual(
                    "Le roi des pirates ce sera moi, Monkey D Luffy"
                );
            });
        });
        describe("with the wrong arguments", () => {
            test("it returns null", () => {
                const firstString = true;
                const scdString =
                    "Monkey pirates sera Luffy Le moi, ce roi des D";

                expect(putSomeSpaces(firstString, scdString)).toBe(null);
            });
        });
    });
});
