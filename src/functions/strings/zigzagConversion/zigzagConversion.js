//My version
const convert = (s, numRows) => {
    const colToStart = numRows - 2;
    const gap = numRows + colToStart - 1;
    let ans = "";
    let elements = [];
    let currentInd = 0;
    for (let i = 0; i < s.length; i++) {
        const currentState = currentInd >= numRows ? "reverse" : "regular";
        let currentRow;
        if (currentState === "regular") {
            currentRow = currentInd;
        } else {
            const indLastRow = numRows - 1;
            const step = currentInd + 1 - numRows;
            currentRow = indLastRow - step;
        }
        const current = {
            row: currentRow,
            val: s[i],
        };
        elements.push(current);
        currentInd++;
        if (currentInd > gap) {
            currentInd = 0;
        }
    }
    const sorted = elements.sort((a, b) => a.row - b.row);
    for (let i = 0; i < sorted.length; i++) {
        ans = `${ans}${sorted[i].val}`;
    }
    return ans;
};
