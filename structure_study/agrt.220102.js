const ex8 = (arr) => {
    const sortedArrByAlphabet = arr.map(str => {
        return str.split('').sort((a, b) => a.localeCompare(b)).join('');  
    })

    return sortedArrByAlphabet.sort((a, b) => a.localeCompare(b));
}

console.log(ex8(['asdflkjlk', 'sflkjakjsbdf', 'asdjkfhlkjweq', 'asldkfjljhg']))