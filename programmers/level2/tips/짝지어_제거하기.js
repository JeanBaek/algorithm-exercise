const testCases = ['baabaa', 'cdcd', 'aabbccdd'];

const regExp2continuousW = /(\w)\1{1}/ig; // aa, bb, cc, dd, ee

// TODO: 시간복잡도 줄여서 월요일에 소개하기

function solution(s) {
    let isAllPopped = false;

    // 홀수면 모두 제거 불가
    if (s.length % 2) return +isAllPopped;

    // 짝수면 제거 시도
    let poppedS = s;
    while (poppedS) {
        const replacedS = poppedS.replaceAll(regExp2continuousW, "");

        // 제거된 문자열 없고, 아직 문자 남아있으면 모두 제거 불가 판단
        if (poppedS.length === replacedS.length && replacedS.length > 0) return +isAllPopped;

        poppedS = replacedS;
    }

    isAllPopped = true;
    return +isAllPopped;
}

console.log(solution(testCases[0]));