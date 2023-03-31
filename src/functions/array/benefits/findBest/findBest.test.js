import { findBestBenefits } from "./findBest";

describe("algorithms - array", () => {
    describe("/benefits/findBest", () => {
        describe("with the right data", () => {
            test("it returns the highest benef", () => {
                const benefArr = [10, 21, 9, 12, 14, 5, 10, 8, 25];
                expect(findBestBenefits(benefArr)).toEqual(20);
            });
            test("it returns -1 if there ain't no benef to make: same prices case", () => {
                const benefArr = [10, 10, 10, 10, 10, 10, 10, 10, 10];
                expect(findBestBenefits(benefArr)).toEqual(-1);
            });
            test("it returns -1 if there ain't no benef to make: decreasing prices case", () => {
                const benefArr = [10, 10, 10, 6, 6, 6, 6, 6, 6];
                expect(findBestBenefits(benefArr)).toEqual(-1);
            });
        });
        describe("with wrong data", () => {
            test("it returns null if the data are not properly set", () => {
                const benefArr = [];
                expect(findBestBenefits(benefArr)).toEqual(null);
            });
            test("it returns null if a temperature does not have the number type", () => {
                const benefArr = [10, 6, 3, 2, "5", 3];
                expect(findBestBenefits(benefArr)).toEqual(null);
            });
        });
    });
});
