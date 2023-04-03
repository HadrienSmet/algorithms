export const convertDegree = (celsius) => {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.8 + 32;
    const ans = [kelvin, fahrenheit];

    return ans;
};
