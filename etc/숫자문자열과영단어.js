const codeToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const numToCode = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
    let result = "";
    let currCode = "";

    for (let char of s) {
        if (numToCode[char]) result += char;
        else currCode += char;

        if (Number.isInteger(codeToNum[currCode])) {
            result += codeToNum[currCode];
            currCode = "";
        }
    }

    return +result;
}
