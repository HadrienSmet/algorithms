import { findBestBenefits } from "./findBest";

test("the best benef to be 20", () => {
    const benefArr = [10, 21, 9, 12, 14, 5, 10, 8, 25];
    expect(findBestBenefits(benefArr)).toEqual(20);
});
test("no benef", () => {
    const benefArr = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(findBestBenefits(benefArr)).toEqual(-1);
});
test("second no benef", () => {
    const benefArr = [10, 10, 10, 6, 6, 6, 6, 6, 6];
    expect(findBestBenefits(benefArr)).toEqual(-1);
});
test("no value", () => {
    const benefArr = [];
    expect(findBestBenefits(benefArr)).toEqual(-1);
});
