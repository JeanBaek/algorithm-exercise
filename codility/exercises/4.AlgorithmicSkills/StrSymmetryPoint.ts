// result: https://app.codility.com/demo/results/training7PD4SD-AWN/

function solution(S: string): number {
    if (!S.length || !(S.length % 2)) return -1;
    if (S.length === 1) return 0;

    const midIdx = (S.length - 1) / 2;

    return S.slice(0, midIdx) === reverseStr(S.slice(midIdx + 1)) ? midIdx : -1;
}

function reverseStr(str: string) {
    return str.split('').reverse().join('');
}

console.log(solution('racecar'));
console.log(solution('x'));

export {}