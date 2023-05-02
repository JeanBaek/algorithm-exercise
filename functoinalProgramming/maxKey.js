function reduce(array, init, f) {
    let accum = init;

    array.forEach(el => {
        accum = f(accum, el);
    })

    return accum;
}

function maxKey(array, init, f) {
    return reduce(array, init, (biggestSoFar, element) => {
        if (f(biggestSoFar) > f(element)) return biggestSoFar
        else return element
    })
}

function max(array, init) {
    return maxKey(array, init, (x) => x)
}
