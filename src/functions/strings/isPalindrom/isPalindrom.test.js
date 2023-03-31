import { isPalindrom } from "./isPalindrom";

describe("algorithms - strings", () => {
    describe("/isPalindrom", () => {
        describe("with the right arguments", () => {
            test("it returns true if it is a palindrom", () => {
                const word1 = "trace";
                const word2 = "ecart";
                expect(isPalindrom(word1, word2)).toBe(true);
            });
            test("it returns false if it is not a palindrom", () => {
                const word1 = "trace";
                const word2 = "ecran";
                expect(isPalindrom(word1, word2)).toBe(false);
            });
        });
        describe("with the wrong arguments", () => {
            test("Is palindrom: wrong arguments case", () => {
                const word1 = false;
                const word2 = "elsaf";

                expect(isPalindrom(word1, word2)).toBe(null);
            });
        });
    });
});
