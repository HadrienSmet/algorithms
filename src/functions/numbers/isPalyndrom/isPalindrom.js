
//How to make a function wich accepts a number as argument and wich returns true if it is a palindrom and false if it is not.
export const isPalindrome = (x) => {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(1);
    if (typeof x !== "number") {
        return null;
    }

    const str = x.toString();
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    while (leftIndex < rightIndex) {
        if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
};
