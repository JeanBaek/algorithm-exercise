const fs = require("fs");
const filepath = "boj.1931.input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([count, ...cases]: string[]) {
  const availableMeetings = cases
    .map((c) => {
      const [start, end] = c.split(" ");

      return { start: +start, end: +end };
    })
    .sort((a, b) => a.end - b.end || a.start - b.start)
    .reduce((meetings: { start: number; end: number }[], { start, end }) => {
      const last = meetings[meetings.length - 1];

      if (!last || last.end <= start) {
        meetings.push({ start, end });
      }

      return meetings;
    }, []);

  return availableMeetings.length;
}

console.log(solution(input));

export {};
