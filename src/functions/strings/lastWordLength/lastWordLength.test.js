import { lastWordLength } from "./lastWordLength";

describe("algorithms - strings", () => {
    describe("/lastWordLength", () => {
        describe("with right data", () => {
            test("it returns the right length", () => {
                const example = "luffy is still joyboy";

                expect(lastWordLength(example)).toBe(6);
            });

            test("it returns the right length even with useless spaces", () => {
                const example = "   fly me   to   the moon  ";

                expect(lastWordLength(example)).toBe(4);
            });
        });
        describe("with wrong data", () => {
            test("it returns null when wrong type", () => {
                const example = true;

                expect(lastWordLength(example)).toBe(null);
            });
            test("it returns null when no spaces", () => {
                const example = "luffyisstilljoyboy";

                expect(lastWordLength(example)).toBe(null);
            });
        });
    });
});
