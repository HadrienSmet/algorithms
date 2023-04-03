export const removeVowels = (string) => {
    const ans = string.replaceAll(/a|e|i|o|u|y/g, "");
    return ans;
};
