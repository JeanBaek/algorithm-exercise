/**
 * @param {string} s
 * @return {number}
 */

const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

const romanToInt = function (s) {
    let int = 0;
    let pointer = 0;

    while (pointer < s.length) {
        if (s[pointer] === "I") {
            if (s[pointer + 1] === "V" || s[pointer + 1] === "X") {
                int -= romanNums[s[pointer++]];
                continue;
            }
        } else if (s[pointer] === "X") {
            if (s[pointer + 1] === "L" || s[pointer + 1] === "C") {
                int -= romanNums[s[pointer++]];
                continue;
            }
        } else if (s[pointer] === "C") {
            if (s[pointer + 1] === "D" || s[pointer + 1] === "M") {
                int -= romanNums[s[pointer++]];
                continue;
            }
        }

        int += romanNums[s[pointer++]];
    }

    return int;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
