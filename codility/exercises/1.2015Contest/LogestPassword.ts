// result1: https://app.codility.com/demo/results/training52GYST-NNC/
// result2: https://app.codility.com/demo/results/trainingGEGZ33-MD6/
// result3: https://app.codility.com/demo/results/trainingCQPGBS-T8G/

function solution(S: string): number {
    const validWords = S.split(' ')
        .filter(word => isValid(word));

    if (!validWords.length) return -1;

    return validWords
        .sort((a, b) => b.length - a.length)
        [0]
        .length;
}

function isValid(word: string): boolean {
    const digit = word.replace(/[a-zA-Z]/g, "");
    const letter = word.replace(/[0-9]/g, "");

    if ((letter.length + digit.length) !== word.length) return false;

    return isEvenLetter(letter) && isOddDigit(digit);
}

function isEvenLetter(letter: string): boolean {
    return !(letter.length % 2);
}

function isOddDigit(digit: string): boolean {
    return !!(digit.length % 2);
}

console.log(solution('11'));

export {};