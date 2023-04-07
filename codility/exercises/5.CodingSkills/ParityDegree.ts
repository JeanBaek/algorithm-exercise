// result(score 50%): https://app.codility.com/demo/results/trainingXRGSG3-MKC/
// result(score 100%): https://app.codility.com/demo/results/trainingD6Z2XF-E8J/

function solution(N: number): number {
    let p = 0;
    let highestP = 0;

    while ((2 ** p) <= N) {
        if (N % (2 ** p) === 0) highestP = p;

        p++;
    }

    return highestP;
}

console.log(solution(24));
console.log(solution(1));
console.log(solution(2));

export {}