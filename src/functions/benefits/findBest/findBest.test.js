import { findBestBenefits } from "./findBest";

test("highest benef: regular case", () => {
    const benefArr = [10, 21, 9, 12, 14, 5, 10, 8, 25];
    expect(findBestBenefits(benefArr)).toEqual(20);
});
test("highest benef: no benef case", () => {
    const benefArr = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(findBestBenefits(benefArr)).toEqual(-1);
});
test("highest benef: second no benef case", () => {
    const benefArr = [10, 10, 10, 6, 6, 6, 6, 6, 6];
    expect(findBestBenefits(benefArr)).toEqual(-1);
});
test("highest benef: no value case", () => {
    const benefArr = [];
    expect(findBestBenefits(benefArr)).toEqual(-1);
});
test("highest benef: wrong data case", () => {
    const benefArr = [10, 6, 3, 2, "5", 3];
    expect(findBestBenefits(benefArr)).toEqual(
        "Data does not contain only numbers"
    );
});
