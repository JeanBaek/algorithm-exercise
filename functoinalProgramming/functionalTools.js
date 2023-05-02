const objectSet = (object, key, value) => {
    const newObject = {...object}

    newObject[key] = value;

    return newObject;
}

const pluck = (array, field) => {
    return array.map(({field}) => field);
}

const invokeMap = (array, field) => {
    return array.map(({field}) => field);
}

const flatmap = (arrays) => {
    arrays.flat()
}

const frequenciesBy = (array, f) => {
    const ret = {};

    array.forEach(e => {
        const key = f(e);

        if (ret[key]) ret[key] += 1;
        else ret[key] = 1;
    });

    return ret;
}

// 사용예
const howMany = frequenciesBy(products, ({type}) => type);
console.log(howMany['ties']);

const groupBy = (array, f) => {
    const ret = {};

    array.forEach(e => {
        const key = f(e);

        if (ret[key]) ret[key].push(e);
        else ret[key] = [e];
    })

    return ret;
}

// 사용예
const groups = groupBy(range(0, 10), isEven);
console.log(groups)

function range(start, end) {
    const ret = [];

    for (let i = start; i < end; i++) {
        ret.push(i);
    }

    return ret;
}

function isEven(num) {
    return !(num % 2)
}