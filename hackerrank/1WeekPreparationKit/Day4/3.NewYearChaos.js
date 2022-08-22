'use strict';

// TODO: time optimization

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    // print 'order' earlier than its index + 1
    // or print 'order' 2+ ealier than its index + 1
    let bribeCount = 0;
    let leftPosition = new Set(q);
    
    const isTooChaotic = q.some((order, index) => {
        // if here's a too much bribed one, return true
        /** 
        e.g [2, 5, 1, 3, 4] 
        when index is 1 => there can be till 4
        if the 'order' is more than 4 
        **/
        if (order - 2 > index + 1) return true;
        if (order > index + 1)  bribeCount += (order - index - 1);
        else if (order > Math.min(...leftPosition)) bribeCount += 1;
        
        leftPosition.delete(order);
        
        return false;
    })
    
    console.log(isTooChaotic ? 'Too chaotic' : bribeCount);
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
