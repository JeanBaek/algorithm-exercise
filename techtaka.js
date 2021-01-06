/* 
문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
​
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
​
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록​
 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

// 추후 재풀이 및 보강 예정
const solution1 = (numArr) => {
  let result = [];

  /*
  numArr[0] + numArr[1] + numArr[2]
  numArr[0] + numArr[2] + numArr[1]
  numArr[1] + numArr[2] + numArr[0]
  numArr[1] + numArr[0] + numArr[2]
  numArr[2] + numArr[0] + numArr[1]
  numArr[2] + numArr[1] + numArr[0]
  */

  for (let i = 0; i < numArr.length; i++) {
    result.push(String(numArr[i]));
  }

  return Math.max(...result);
};

/*
- 실행결과 예측
- 제한시간 3분
*/

// this 제대로 다시 공부한 후 재풀이 예정
function printName() {
  var inner1 = () => console.log(this.name, name); // 3 C
  var inner2 = function () {
    console.log(this.name, name);
  }; // 4 C
  function print() {
    //2
    inner1();
    inner2();
  }
  console.log(name); // output undefined
  var name = "C";
  print(); // output 1
  name = "D"; // A
  return print;
}
name = "B";

// ({name: 'A', fnc: printName}).fnc()();

var inc = { name: "A", fnc: printName };
var result = inc.fnc();
result();

/////////////////////////////////////////
// 아래에 Console에 출력된 실행결과를 기술해 주세요

/*
- 휴대폰 전화번호 검증
- 제한시간 20분
*/

// 정규 표현식 공부한 후 재풀이 예정
const solution = function (no: string | null | undefined): boolean {
  // 코드를 작성해 주세요

  no = no.split("-").join("");

  // 1. 010 확인
  // 2. 나머지 자리가 7~8 자리인지 확인

  const right = no.slice(0, 3);
  const left = no.slice(3);

  return right === 010 && (left.length === 7 || left.length === 8)
    ? true
    : false;
};

// 010/1234/1231
// 010 1234 1231
// 01012341231
// 위의 양식은 사람이 봤을 땐 휴대폰번호지만, 컴퓨터가 봤을 땐 복합데이터이다. 이런 경우는 어떻게 처리할 것인가?
// 일반 전화번호(02, 032 등) 유효성은 어떻게 처리할 것인가?
