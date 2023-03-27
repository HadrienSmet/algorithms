import { isAnagram } from "./isAnagram";

test("Is anagram: first regular case", () => {
    const word1 = "chien";
    const word2 = "niche";
    expect(isAnagram(word1, word2)).toBe(true);
});
test("Is anagram: second regular case", () => {
    const word1 = "chien";
    const word2 = "biche";
    expect(isAnagram(word1, word2)).toBe(false);
});
test("Is anagram: same words case", () => {
    const word1 = "chien";
    const word2 = "CHIEN";
    expect(isAnagram(word1, word2)).toBe("Dude that's the same words...");
});
test("Is anagram: wrong arguments first case", () => {
    const word1 = 1;
    const word2 = "un";
    expect(isAnagram(word1, word2)).toBe(
        "This function only accepts a couple of strings as arguments"
    );
});
test("Is anagram: wrong arguments second case", () => {
    const word1 = "true";
    const word2 = true;
    expect(isAnagram(word1, word2)).toBe(
        "This function only accepts a couple of strings as arguments"
    );
});
