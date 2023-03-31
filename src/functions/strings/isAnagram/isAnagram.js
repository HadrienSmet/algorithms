//This is how to make a function wich takes two words as input and a boolean as output that indicates if the words are anagrams

export const isAnagram = (firstWord, scdWord) => {
    if (typeof firstWord !== "string" || typeof scdWord !== "string") {
        return null;
    }
    if (
        firstWord.toLowerCase().split("").sort().join("") ===
        scdWord.toLowerCase().split("").sort().join("")
    ) {
        return true;
    } else {
        return false;
    }
};
