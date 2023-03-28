//This function takes two strings as arguments.
//The first argument is a text wich does not contains any space.
//The second argument is the same text but not in the right order but each word is isolated with spaces.
//Thanks to the second arguments put the spaces at the right space on the first argument

export const putSomeSpaces = (firstTxt, scdTxt) => {
    const splittedText = [...firstTxt];
    const wordsArray = scdTxt.split(" ");
    const wordsSplittedArray = [];

    wordsArray.forEach((word) => {
        wordsSplittedArray.push(word.split(""));
    });

    const rightOrder = wordsSplittedArray.sort((a, b) => b.length - a.length);
    rightOrder.forEach((splittedWord) => {
        const currentWordLength = splittedWord.length;
        for (let i = 0; i < splittedText.length; i++) {
            if (
                splittedText[i].toLowerCase() === splittedWord[0].toLowerCase()
            ) {
                const potentialWord = splittedText
                    .slice(i, i + currentWordLength)
                    .join("")
                    .toLowerCase();

                if (potentialWord === splittedWord.join("").toLowerCase()) {
                    if (i + currentWordLength !== splittedText.length) {
                        splittedText.splice(
                            i,
                            currentWordLength,
                            splittedWord.join("") + " "
                        );
                    } else {
                        splittedText.splice(
                            i,
                            currentWordLength,
                            splittedWord.join("")
                        );
                    }
                }
            }
        }
    });

    const answer = splittedText.join("");
    return answer;
};
