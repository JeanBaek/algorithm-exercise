function getPromise(resolveValue?: string, delay: number = 0) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(resolveValue), delay)
  );
}

async function getCatPromise() {
  return getPromise("Cat", 2000);
}

async function getDogPromise() {
  return getPromise("Dog", 3000);
}

async function notOptimized() {
  console.log("notOptimized ===============");
  console.time("Function1");

  console.time("Cat1");
  const cat1 = await getCatPromise(); // 각각 delay만큼 기다림
  console.timeEnd("Cat1");

  console.time("Dog1");
  const dog1 = await getDogPromise(); // 각각 delay만큼 기다림
  console.timeEnd("Dog1");

  console.timeEnd("Function1");

  console.log({ cat1, dog1 });
  console.log("======================================");
}

async function optimizedNonBlocking() {
  console.log("optimizedNonBlocking ===============");
  console.time("Function2");

  console.time("Cat2");
  const catPromise = getCatPromise(); // 비동기 함수를 논블로킹으로 미리 실행
  console.timeEnd("Cat2");

  console.time("Dog2");
  const dogPromise = getDogPromise(); // 비동기 함수를 논블로킹으로 미리 실행
  console.timeEnd("Dog2");

  const cat2 = await catPromise;
  const dog2 = await dogPromise;

  console.timeEnd("Function2");
  console.log({ cat2, dog2 });

  console.log("======================================");
}

async function optimizedPromiseAll() {
  console.log("optimizedPromiseAll ===============");
  console.time("Function3");

  const [cat3, dog3] = await Promise.all([getCatPromise(), getDogPromise()]);

  console.timeEnd("Function3");
  console.log({ cat3, dog3 });

  console.log("======================================");
}

notOptimized();
optimizedNonBlocking();
optimizedPromiseAll();

export {};
