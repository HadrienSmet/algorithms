import { isPalindrom } from "./isPalindrom";

test("Is palindrom: first regular case", () => {
    const word1 = "trace";
    const word2 = "ecart";
    expect(isPalindrom(word1, word2)).toBe(true);
});
test("Is palindrom: second regular case", () => {
    const word1 = "trace";
    const word2 = "ecran";
    expect(isPalindrom(word1, word2)).toBe(false);
});
test("Is palindrom: wrong arguments case", () => {
    const word1 = false;
    const word2 = "elsaf";
    expect(isPalindrom(word1, word2)).toBe(
        "This function only accepts a couple of string as arguments"
    );
});
