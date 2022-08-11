/** Test Results: 
1. https://app.codility.com/demo/results/trainingRBAHMZ-JCV/
2. https://app.codility.com/demo/results/training8BSG4Q-TA3/
**/

// /** 첫번째 풀이
// S: string, P: number[](max length of 50000), Q: number[](max length of 50000)
// e.g) S: "CAGCCTA", P: [2, 5, 0], Q: [4, 5, 6]

const IMPACT_FACTOR = { A: 1, C: 2, G: 3, T: 4 };

function solution(S: string, P: number[], Q: number[]) {
  // 영향계수 = {A: 1, C: 2, G: 3, T: 4} // 최소 영향계수 찾아야함
  // P[0] ~ Q[0] === 2 ~ 4 === G, C(중복) // 둘의 영향계수는 3, 2 // 2가 minimal impact factor
  // p[1] ~ Q[1] === 5 ~ 5 === T // 영향계수 4
  // p[2] ~ Q[2] === 0 ~ 6 === T // CAGT(중복들) 1, 2, 3, 4 // 1이 minimal impact

  return P.reduce((minFactors: number[], start, index) => {
    const impactSet: Set<number> = new Set();

    for (let i = start; i <= Q[index]; i++) {
      impactSet.add(IMPACT_FACTOR[S[i]]);
    }

    minFactors.push(Math.min(...impactSet));

    return minFactors;
  }, []);
}
// **/

// 두번째 풀이
function solution(S: string, P: number[], Q: number[]) {
  return P.reduce((minImpacts: number[], start, i) => {
    const types = S.slice(start, Q[i] + 1);

    if (types.indexOf("A") !== -1) minImpacts.push(1);
    else if (types.indexOf("C") !== -1) minImpacts.push(2);
    else if (types.indexOf("G") !== -1) minImpacts.push(3);
    else minImpacts.push(4);

    return minImpacts;
  }, []);
}

export {};
