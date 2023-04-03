// result : https://app.codility.com/demo/results/trainingQ6N494-78K/

const ENTRANCE_FEE = 2;
const FIRST_COST = 3;
const REST_COST = 4;

function solution(E: string, L: string): number {
    let {h, m} = getTimeDiff(E, L);
    let {leftH, leftM} = {leftH: h, leftM: m};
    let total = 0;

    total += ENTRANCE_FEE;
    total += FIRST_COST;

    if (leftH >= 1) leftH--;
    else if (leftM >= 1) leftM = 0;

    total += leftH * REST_COST;
    if (leftM) total += REST_COST;

    return total;
}

function getTimeDiff(E: string, L: string) {
    const eTime = new Date(`2023-04-03T${E}`);
    const lTime = new Date(`2023-04-03T${L}`);
    const diffTime = lTime.getTime() - eTime.getTime()

    const [h, m] = ((diffTime) / 1000 / 3600).toString().split('.');

    return {
        h: Number(h),
        m: Math.round(Number(m) * 0.6),
    }
}

console.log(solution('10:00', '13:21'))

export {};