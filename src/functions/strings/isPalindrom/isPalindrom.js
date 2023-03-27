//How to make a function that checks if two words are palyndroms

export const isPalindrom = (firstWord, scdWord) => {
    if (typeof firstWord !== "string" || typeof scdWord !== "string") {
        return "This function only accepts a couple of string as arguments";
    }
    if (
        firstWord.toLowerCase() ===
        scdWord.toLowerCase().split("").reverse().join("")
    ) {
        return true;
    } else {
        return false;
    }
};
