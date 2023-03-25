//How to find the greatest benefits
export const findBestBenefits = (benefArr) => {
    let potentialsBenefits = [];
    let currentBuy = undefined;
    let currentSell = undefined;
    let currentBenefits;

    for (let i = 0; i <= benefArr.length; i++) {
        if (currentBuy === undefined) {
            currentBuy = benefArr[i];
        } else {
            if (currentBuy < benefArr[i]) {
                if (currentSell === undefined) {
                    currentSell = benefArr[i];
                }
                if (currentSell < benefArr[i]) {
                    currentSell = benefArr[i];
                }
            }
            if (currentBuy > benefArr[i]) {
                if (currentSell !== undefined) {
                    currentBenefits = currentSell - currentBuy;
                    potentialsBenefits.push(currentBenefits);
                    currentSell = undefined;
                }
                currentBuy = benefArr[i];
            }
        }
        if (i === benefArr.length) {
            if (currentSell !== undefined) {
                currentBenefits = currentSell - currentBuy;
                potentialsBenefits.push(currentBenefits);
            }
        }
    }
    const answer =
        potentialsBenefits[0] === undefined
            ? -1
            : potentialsBenefits.sort((a, b) => b - a)[0];
    return answer;
};
