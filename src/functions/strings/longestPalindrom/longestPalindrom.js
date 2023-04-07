//Optimized version
var longestPalindrome = function (string) {
    let longestPal = "";

    var getLongestPalindrome = function (leftPosition, rightPosition) {
        while (
            leftPosition >= 0 &&
            rightPosition < string.length &&
            string[leftPosition] === string[rightPosition]
        ) {
            leftPosition--;
            rightPosition++;
        }

        if (rightPosition - leftPosition > longestPal.length) {
            longestPal = string.slice(leftPosition + 1, rightPosition);
        }
    };

    for (let i = 0; i < string.length; i++) {
        getLongestPalindrome(i, i + 1);
        getLongestPalindrome(i, i);
        if ((string.length - i) * 2 < longestPal.length) {
            break;
        }
    }

    return longestPal;
};

//My version
// const longestPalindrome = (s) => {
//     let ans = ""
//     if (s.length === 1) return s
//     for (let i =0; i < s.length; i++) {
//       let potential = ""
//       for (let j = s.length -1; j>=0; j--) {
//         if (s[j] === s[i] && i !== j) {
//           potential = s.slice(i, j+1);
//           let li = 0;
//           let ri = potential.length - 1;
//           while(li < ri) {
//             if (potential[li] !== potential[ri]) {
//               potential = ""
//             }
//             li++;
//             ri--
//           }
//           if (potential.length > ans.length) ans = potential;
//         }
//       }
//     }
//     if (ans.length === 0) return s[0]
//     return ans
// };
