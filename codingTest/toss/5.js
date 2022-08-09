const exclude = ",";

function solution(text, keyword) {
  const start = text.indexOf(keyword[0]);
  let end = 0;

  if (start === -1) return text;

  // 아 이거 더 깔끔한 방법이 있을 것 같아.. 더 고민해봐야겠다
  let i = 1;
  let j = 1;
  let executingIdx = keyword.length;

  while (i < executingIdx) {
    if (text[start + i] === keyword[j]) {
      end = start + i;

      j++;
    } else if (text[start + i] === exclude) {
      executingIdx++;
    } else return text;

    i++;
  }

  const markText = `<mark>${text.slice(start, end + 1)}</mark>`;
  let html = text.slice(0, start) + markText + text.slice(end + 1);

  return html;
}

const input = ["잔액 1,035,000원", "350"];

console.log(solution(...input));
