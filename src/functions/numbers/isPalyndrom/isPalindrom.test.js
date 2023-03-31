import { isPalindrome } from "./isPalindrom";

describe("algorithms - numbers", () => {
    describe("/isPalindrom", () => {
        describe("with right argument", () => {
            test("when it returns true", () => {
                const example = 383;

                expect(isPalindrome(example)).toBe(true);
            });
            test("when it returns false", () => {
                const example = 583;

                expect(isPalindrome(example)).toBe(false);
            });
        });
        describe("with wrong argument", () => {
            test("it returns null", () => {
                const example = "595";

                expect(isPalindrome(example)).toBe(null);
            });
        });
    });
});
