function createQueryString(object) {
  const result = []; // encode 된 상태의 key=value 형태로 저장

  for (let [key, value] of Object.entries(object)) {
    // nullish는 continue;
    if (value === null || value === undefined) continue;

    if (Array.isArray(value)) {
      // 배열이면 for문 한번 더 돌면서 result에 push
      value.forEach((v) => {
        if (v === null || v === undefined) return;

        result.push(`${key}=${encodeURIComponent(v)}`);
      });
    } else {
      // 아니면 encode한 상태로 result에 push
      result.push(`${key}=${encodeURIComponent(value)}`);
    }
  }

  if (result.length === 0) return "";

  return `?${result.join("&")}`;
}

function solution(input) {
  var object = JSON.parse(input);
  var answer = createQueryString(object);
  return answer;
}

console.log(createQueryString({}));
console.log(
  createQueryString({
    foo: "bar",
    enabled: true,
    browser: false,
    arr: [1, 2, 3, undefined],
  })
);
