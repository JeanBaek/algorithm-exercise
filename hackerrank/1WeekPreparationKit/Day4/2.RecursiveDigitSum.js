'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k = 1) {
    if (new Set(n.split('')).size === 1) return n = n[0];
    
    const times = new Set(k.toString().split(''));
    if ((times.size === 2 && times.has('1') && times.has('0')) || (times.size === 1 && times.has('1'))) k = 1;
    
    if (n.length === 1 && k === 1) return n;
    
    if (k > 1) {
        let newN = n;
        
        for (let i = 1; i < k; i++) newN += n;
        
        n = newN;
    } 
    
    let p = 0;
    for (let num of n) p += +num;

    return superDigit(p.toString());
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
