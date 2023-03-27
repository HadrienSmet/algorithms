//How to find the hottest temperature between fahrenheit and celsius

const convertToFahrenheit = (celsius) => {
    const converted = celsius * (9 / 5) + 32;

    return converted;
};
export const findTheHottest = (celsius, fahrenheit) => {
    if (typeof celsius !== "number" || typeof fahrenheit !== "number") {
        return "The temperatures to compare must be given as number";
    }
    if (
        celsius < -274 ||
        fahrenheit < -459.67 ||
        celsius > ((1.417 * 10) ^ 32) ||
        (fahrenheit + 32) * (5 / 9) > ((1.417 * 10) ^ 32)
    ) {
        return "Are you from another dimension?";
    }
    if (convertToFahrenheit(celsius) < fahrenheit) {
        return "Go to America, it's hotter";
    } else if (convertToFahrenheit(celsius) > fahrenheit) {
        return "Go to Europe, it's hotter";
    } else {
        return "Kiff kiff et bourrico";
    }
};
