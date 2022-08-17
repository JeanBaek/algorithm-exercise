"use strict";

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const AM_TIME = {
  12: "00",
  01: "01",
  02: "02",
  03: "03",
  04: "04",
  05: "05",
  06: "06",
  07: "07",
  08: "08",
  09: "09",
  10: "10",
  11: "11",
};
const PM_TIME = {
  12: "12",
  01: "13",
  02: "14",
  03: "15",
  04: "16",
  05: "17",
  06: "18",
  07: "19",
  08: "20",
  09: "21",
  10: "22",
  11: "23",
};

function timeConversion(s) {
  // Write your code here
  const timeFormat = s.slice(-2);

  if (timeFormat === "AM") {
    console.log(AM_TIME[s.slice(0, 2)] + s.slice(2, -2));
  } else {
    console.log(PM_TIME[s.slice(0, 2)] + s.slice(2, -2));
  }
}

function main() {
  //   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  //   const s = readLine();
  const s = "12:01:00AM";
  //   const s = "12:01:00PM";
  const result = timeConversion(s);

  //   ws.write(result + "\n");

  //   ws.end();
}

main();
