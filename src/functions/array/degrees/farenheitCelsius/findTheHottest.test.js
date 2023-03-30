import { findTheHottest } from "./findTheHottest";

test("Compare celsius and fahrenheit: first regular case", () => {
    const celsiusExample = 40;
    const fahrenheitExample = 40;
    expect(findTheHottest(celsiusExample, fahrenheitExample)).toEqual(
        "Go to Europe, it's hotter"
    );
});
test("Compare celsius and fahrenheit: second regular case", () => {
    const celsiusExample = 1;
    const fahrenheitExample = 40;
    expect(findTheHottest(celsiusExample, fahrenheitExample)).toEqual(
        "Go to America, it's hotter"
    );
});
test("Compare celsius and fahrenheit: third regular case", () => {
    const celsiusExample = 0;
    const fahrenheitExample = 32;
    expect(findTheHottest(celsiusExample, fahrenheitExample)).toEqual(
        "Kiff kiff et bourrico"
    );
});
test("Compare celsius and fahrenheit: wrong params first case", () => {
    const celsiusExample = 0;
    const fahrenheitExample = "32";
    expect(findTheHottest(celsiusExample, fahrenheitExample)).toEqual(
        "The temperatures to compare must be given as number"
    );
});
test("Compare celsius and fahrenheit: wrong params second case", () => {
    const celsiusExample = -300;
    const fahrenheitExample = 32;
    expect(findTheHottest(celsiusExample, fahrenheitExample)).toEqual(
        "Are you from another dimension?"
    );
});
test("Compare celsius and fahrenheit: wrong params third case", () => {
    const celsiusExample = (1.45 * 10) ^ 33;
    const fahrenheitExample = 32;
    expect(findTheHottest(celsiusExample, fahrenheitExample)).toEqual(
        "Are you from another dimension?"
    );
});
