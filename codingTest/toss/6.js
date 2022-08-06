function solution(pin) {
  if (new Set(pin.split("")).size === 1) return false;

  let isContinued = false;

  for (let i = 1; i <= 2; i++) {
    const pre = +pin[i - 1];
    const cur = +pin[i];
    const pro = +pin[i + 1];

    // 오름차순 연속 체크
    if (pre + 1 === cur && cur + 1 === pro) isContinued = true;

    // 내림차순 연속 체크
    if (pre - 1 === cur && cur - 1 === pro) isContinued = true;
  }

  return !isContinued;
}

console.log(solution("0000"));
console.log(solution("1234"));
console.log(solution("9876"));
console.log(solution("1398"));
