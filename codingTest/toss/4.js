// 1초 이상 지연되는 경우 Rejected Promise 반환
// 문제가 잘 기억나지 않아서 Rejected Promise를 사용할 수 있는 방식으로 내가 문제 구상

const { Resolver } = require("webpack");

const state = { trigger: false }; // setTimeout cb함수로 trigger true로 만들고, 1초가 지나도 trigger가 false인 경우 Rejected Promise 반환

function solution(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (state.trigger = true), ms);

    setTimeout(() => {
      if (state.trigger) resolve("Resolve:");
      else reject("Reject:");
    }, 1000);
  });

  // .then((message) => console.log(message, "에러가 발생했다구요? 모르겠눈데"))
  // .catch((err) =>
  //   console.log(err, "에러 잘 처리함 후훗. 정상적으로 실행 이어짐")
  // )
  // .then(() => console.log("다음 핸들러 실행할게요~"));

  // return new Promise((res, rej) => {
  //   try {
  //     // const file = require("fs").readFileSync("./4.sd.txt").toString();
  //     res([]);
  //   } catch (err) {
  //     rej("NO!");
  //   }
  // });

  // return new Promise((resolve, reject) => resolve("OK!"));
  // return new Promise((resolve, reject) => reject("NO!"));
  // const promise = (ms) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(resolve("Succeded!"), ms);
  //     reject("Failed");
  //   });
  // promise(ms)
  //   .then((resolve) => console.log(resolve))
  //   .catch((reject) => console.log(reject));
}

solution(900)
  .then((data) => console.log(data, "발급이 완료되었어요"))
  .catch((err) => console.log(err, "발급이 완료되면 푸시로 알려드릴게요"))
  .finally(() => {
    if (state.trigger) return;

    let intervalId = setInterval(() => {
      if (state.trigger) {
        console.log("Push: 발급이 완료되었어요!");

        clearInterval(intervalId);
        intervalId = null;
      }
    }, 500);
  });
