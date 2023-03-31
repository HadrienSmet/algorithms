import { twoSum } from "./twoSum";

describe("algorithms - array", () => {
    describe("/twoSum", () => {
        describe("with right data", () => {
            test("it returns the rights indexes - first case", () => {
                const numsExample = [2, 1, 3, 4];

                expect(twoSum(numsExample, 6)[0]).toBe(0);
                expect(twoSum(numsExample, 6)[1]).toBe(3);
            });
            test("it returns the rights indexes - second case", () => {
                const numsExample = [3, 3];

                expect(twoSum(numsExample, 6)[0]).toBe(0);
                expect(twoSum(numsExample, 6)[1]).toBe(1);
            });
        });
        describe("with wrong data", () => {
            test("it returns null if the data about the nums is not properly set", () => {
                const numsExample = "un, deux, trois";

                expect(twoSum(numsExample, 6)).toBe(null);
            });
            test("it returns null if an element of nums does not have the number type", () => {
                const numsExample = [1, "2", 3];

                expect(twoSum(numsExample, 6)).toBe(null);
            });
            test("it returns null if the target does not have the number type", () => {
                const numsExample = [1, 2, 3];

                expect(twoSum(numsExample, "6")).toBe(null);
            });
            test("it returns null if an element of nums is negative", () => {
                const numsExample = [1, -2, 3];

                expect(twoSum(numsExample, 4)).toBe(null);
            });
            test("it returns null if the target is negative", () => {
                const numsExample = [1, 2, 3];

                expect(twoSum(numsExample, -4)).toBe(null);
            });
        });
    });
});
