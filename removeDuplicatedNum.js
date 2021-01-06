// "자연수 10개를 입력받은 뒤 이를 42로 나눈 나머지를 구하고, 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하라."
// 1. Math.random을 이용하여 100자리 수 10개 생성 => 배열에 담기
// 2. 각 수를 42로 나눈 나머지를 배열로 담기 => .map() 이용
// 3. 정렬 후 같은 값은 삭제하기. (그 인자로 self 받는 메소드 사용해서)
// 4. 같은 문제를 for문과 set을 이용하여 풀어보기. 
// 6. 입력값이 10000개라면, 효율성 측면에서 어떨지, 얼마만큼의 시간이 걸릴지 생각해보기. 나름대로의 답 구해보기.


// 자연수 10개 생성
const naturalNum = [];
for (let i = 0; i < 10; i++) {
  naturalNum.push(Math.floor(Math.random() * 1000));
}

// 배열과 메서드를 이용하여 품
const testUsingMethods = (naturalNum) => {
  let remainder = naturalNum.map(num => num % 42);
  let uniqueNum = remainder.filter((item, index, self) => self.indexOf(item) == index)
  
  return uniqueNum.length;
}

testUsingMethods(naturalNum);

// for 문을 이용하여 품
const testUsingForLoop = (naturalNum) => {
  let remainder = [];
  let uniqueNum = [];
  
  for (let num of naturalNum) {
   remainder.push(num % 42); 
  }
  
  remainder.sort((a, b) => a - b);
  
  for (let i in remainder) {
    if (remainder[i] !== remainder[Number(i)+1]) {
      uniqueNum.push(remainder[i]);
    }
  }
  
  return uniqueNum.length;
}

testUsingForLoop(naturalNum);


// for문과 Set을 이용하여 품
const testUsingSet = (naturalNum) => {
  let remainder = new Set();
  for (let num of naturalNum) {
    remainder.add(num % 42);
  }
  return remainder.size;
}

testUsingSet(naturalNum);


// 효율성 측면에서 봤을 때, 내장기능으로 중복을 걸러주는 Set을 사용하는 것이 가장 효율적이고, 배열과 메서드를 사용한 풀이가 그 다음으로 효율적이고, for 문을 사용한 풀이가 가장 비효율적이라고 생각된다. 

// 시간 복잡도를 배수로 예측해보자면, Set 풀이가 1, 배열과 메서드 풀이가 1.3, for문 풀이가 2.5의 시간 복잡도를 가졌다고 생각된다. 
// 왜냐하면 Set 풀이는 변수 선언식과 순회하여 값을 넣는 식, 즉 2개의 식이 있고, 배열과 메서드 풀이는 선언과 동시에 순회하여 값을 넣는 식, 즉 1.5개 식 + 순회하여 요소를 삭제하는 식 1개 = 2.5개의 식이 있고, for문 풀이는 선언식 2개와 순회하여 값을 넣는 식 2개 + 요소를 재배열하는 식 1개 = 총 5개의 식이 있기 때문이다.


//손코딩 연습
const numbers = [];
for (let i = 0; i < 10; i ++) {
	numbers.push(Math.floor(Math.random() * 1000));
}

const test = (numbers) => {
	let remainder = new Set();
  for (let num of numbers) {
  	remainder.add(num % 42);
  }
  return remainder.size;
}

test(numbers);
