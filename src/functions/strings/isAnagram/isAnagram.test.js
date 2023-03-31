import { isAnagram } from "./isAnagram";

describe("algorithms - strings", () => {
    describe("/isAnagram", () => {
        describe("with the right type of arguments", () => {
            test("it returns true if they are anagrams", () => {
                const word1 = "chien";
                const word2 = "niche";
                expect(isAnagram(word1, word2)).toBe(true);
            });
            test("it returns false if they are not anagrams", () => {
                const word1 = "chien";
                const word2 = "biche";
                expect(isAnagram(word1, word2)).toBe(false);
            });
        });

        describe("with the wrong type of arguments", () => {
            test("it returns null if the first arguments does not have the string type", () => {
                const word1 = 1;
                const word2 = "un";
                expect(isAnagram(word1, word2)).toBe(null);
            });
            test("it returns null if the second arguments does not have the string type", () => {
                const word1 = "true";
                const word2 = true;
                expect(isAnagram(word1, word2)).toBe(null);
            });
        });
    });
});
