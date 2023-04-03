import { removeVowels } from "./removeVowels";

describe("algorithms - strings", () => {
    describe("/removeVowels", () => {
        describe("with the rights data", () => {
            test("it returns the string without the vowels", () => {
                const example = "Luffy le roi des pirates";

                expect(removeVowels(example)).toBe("Lff l r ds prts");
            });
        });
    });
});
