const promise1 = () =>
  new Promise((resolve) => {
    console.time("promise1");
    setTimeout(() => {
      resolve(1);
      console.timeEnd("promise1");
    }, 2000);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    console.time("promise2");
    setTimeout(() => {
      resolve(2);
      console.timeEnd("promise2");
    }, 3000);
  });

const getPromise1 = () => promise1();
const getPromise2 = () => promise2();

async function trigger() {
  console.time("function");
  const promise1 = getPromise1();
  const promise2 = getPromise2();
  const promises = await Promise.all([promise1, promise2]);
  console.log({ promise1, promise2, promises });
  console.timeEnd("function");
}

trigger();
