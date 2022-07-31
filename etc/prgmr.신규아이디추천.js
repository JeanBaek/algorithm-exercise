const input = "asdf..!asdf";

function solution(new_id) {
  let result = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/[.]+/g, ".")
    .replace(/^[.]/, "")
    .replace(/[.]$/, "");

  const resultLen = result.length;

  if (resultLen === 0) result = "a";
  else if (resultLen >= 16) {
    result = result.slice(0, 15).replace(/[.]$/, "");
  }

  if (resultLen <= 2) {
    while (result.length < 3) result += result[result.length - 1];
  }

  return result;
}

console.log(solution(input));
