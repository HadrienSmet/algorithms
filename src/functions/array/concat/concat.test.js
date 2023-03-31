import { concatArr } from "./concat";

describe("algorithms - array", () => {
    describe("/concat", () => {
        describe("with the right data", () => {
            test("it returns an array wich includes all the elements of the first one twice", () => {
                const example = [1, 2, 1];
                expect(concatArr(example)[0]).toBe(example[0]);
                expect(concatArr(example)[1]).toBe(example[1]);
                expect(concatArr(example)[2]).toBe(example[2]);
                expect(concatArr(example)[0 + example.length]).toBe(example[0]);
                expect(concatArr(example)[1 + example.length]).toBe(example[1]);
                expect(concatArr(example)[2 + example.length]).toBe(example[2]);
            });
            test("it returns an array wich includes all the elements of the first one twice", () => {
                const example = ["un", "deux", "trois"];
                expect(concatArr(example)[0]).toBe(example[0]);
                expect(concatArr(example)[1]).toBe(example[1]);
                expect(concatArr(example)[2]).toBe(example[2]);
                expect(concatArr(example)[0 + example.length]).toBe(example[0]);
                expect(concatArr(example)[1 + example.length]).toBe(example[1]);
                expect(concatArr(example)[2 + example.length]).toBe(example[2]);
            });
        });
        describe("with wrong data", () => {
            test("it returns null if the data is not an array", () => {
                const example = "un, deux, trois";
                expect(concatArr(example)).toBe(null);
            });
            test("it returns null if the data is an empty array", () => {
                const example = [];
                expect(concatArr(example)).toBe(null);
            });
        });
    });
});
