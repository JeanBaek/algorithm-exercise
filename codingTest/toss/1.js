function safelyGet(object, path) {
  return path.split(".").reduce((p, dir) => {
    if (p === undefined) return undefined;
    else p = p[dir];

    return p;
  }, object);
}

function solution(input, path) {
  const result = safelyGet(JSON.parse(input), path);

  if (result === undefined) {
    return "undefined";
  }

  return JSON.stringify(result);
}

const object1 = {
  repository: undefined,
};

const object2 = {
  repository: {
    readme: undefined,
  },
};

const object3 = {
  repository: {
    readme: {
      extension: "md",
      content: "금융을 쉽고 간편하게",
    },
  },
};

// console.log(safelyGet(object2, "repository.readme.extension")); // -> undefined
// console.log(safelyGet(object2, "repository.readme")); // -> undefined
console.log(safelyGet(object2, "repository")); // -> { readme: undefined }

// const input = [];

// console.log(solution(...input));
