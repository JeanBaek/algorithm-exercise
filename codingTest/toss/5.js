const exclude = ",";

function solution(text, keyword) {
  let html = "";

  const highlightStart = keyword.indexOf(keyword[0]);

  if (highlightStart === -1) return text;

  const highlightEnd = 0;

  for (let i = 1; i < keyword.length; i++) {
    keyword[i];
  }

  return html;
}

const input = ["커피 3,500원", "350"];

console.log(solution(...input));
