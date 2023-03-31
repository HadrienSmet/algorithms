import { findTheHottest } from "./findTheHottest";

describe("algorithms - array", () => {
    describe("degrees/findHottest", () => {
        describe("with the right data", () => {
            test("it tells you to travel to Europe if the Celsius is hotter", () => {
                const celsiusExample = 40;
                const fahrenheitExample = 40;
                expect(
                    findTheHottest(celsiusExample, fahrenheitExample)
                ).toEqual("Go to Europe, it's hotter");
            });
            test("it tells you to travel to US if the Fahrenheit is hotter", () => {
                const celsiusExample = 1;
                const fahrenheitExample = 40;
                expect(
                    findTheHottest(celsiusExample, fahrenheitExample)
                ).toEqual("Go to America, it's hotter");
            });
            test("it tells you 'kiff kiff et bourrico' if same same", () => {
                const celsiusExample = 0;
                const fahrenheitExample = 32;
                expect(
                    findTheHottest(celsiusExample, fahrenheitExample)
                ).toEqual("Kiff kiff et bourrico");
            });
        });
        describe("with wrong data", () => {
            test("it returns null if one of the arguments does not have the number type", () => {
                const celsiusExample = 0;
                const fahrenheitExample = "32";
                expect(
                    findTheHottest(celsiusExample, fahrenheitExample)
                ).toEqual(null);
            });
            test("it returns null if one of the arguments is colder than 0° Kelvin", () => {
                const celsiusExample = -300;
                const fahrenheitExample = 32;
                expect(
                    findTheHottest(celsiusExample, fahrenheitExample)
                ).toEqual(null);
            });
            test("it returns null if one of the arguments is hotter than Planck temperature", () => {
                const celsiusExample = (1.45 * 10) ^ 33;
                const fahrenheitExample = 32;
                expect(
                    findTheHottest(celsiusExample, fahrenheitExample)
                ).toEqual(null);
            });
        });
    });
});
