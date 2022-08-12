// 1초 이상 지연되는 경우 Rejected Promise 반환
// 문제가 잘 기억나지 않아서 Rejected Promise를 사용할 수 있는 방식으로 내가 문제 구상

// 참고한 블로그: https://mingeesuh.tistory.com/entry/JS-Promiseall%EA%B3%BC-Promiserace%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EA%B3%BC-%ED%99%9C%EC%9A%A9-%EC%98%88%EC%A0%9C

function solution(delay) {
  return Promise.race([
    fetchData(delay),
    timeout().then(() => Promise.reject("Timeout")),
  ]);
}

solution(20000)
  .then((data) => console.log("발급이 완료되었어요", data))
  .catch((err) => console.log("발급이 완료되면 푸시로 알려드릴게요", err));

// API response 반환하는 함수 모방
function fetchData(delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Response Data"), delay);
  });
}

function timeout() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
}
