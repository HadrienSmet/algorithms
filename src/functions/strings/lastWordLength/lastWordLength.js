//How to find the length of the last word of a text with the best time complexity and memory
export const lastWordLength = (sentence) => {
    if (typeof sentence !== "string") {
        return null;
    }
    let trimmedString = sentence.trim();
    if (trimmedString.lastIndexOf(" ") === -1) {
        return null;
    }
    return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};
