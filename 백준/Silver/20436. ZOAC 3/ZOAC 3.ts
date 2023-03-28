const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const KEYBOARD_LATLNG: Record<string, [number, number, 'l' | 'r']> = {
    q: [0, 0, 'l'],
    w: [1, 0, 'l'],
    e: [2, 0, 'l'],
    r: [3, 0, 'l'],
    t: [4, 0, 'l'],
    y: [5, 0, 'r'],
    u: [6, 0, 'r'],
    i: [7, 0, 'r'],
    o: [8, 0, 'r'],
    p: [9, 0, 'r'],
    a: [0, 1, 'l'],
    s: [1, 1, 'l'],
    d: [2, 1, 'l'],
    f: [3, 1, 'l'],
    g: [4, 1, 'l'],
    h: [5, 1, 'r'],
    j: [6, 1, 'r'],
    k: [7, 1, 'r'],
    l: [8, 1, 'r'],
    z: [0, 2, 'l'],
    x: [1, 2, 'l'],
    c: [2, 2, 'l'],
    v: [3, 2, 'l'],
    b: [4, 2, 'r'],
    n: [5, 2, 'r'],
    m: [6, 2, 'r'],
}

function solution([keys, word]: [string, string]) {
    let [prevLKey, prevRKey] = keys.split(' ');
    let time = 0;

    for (let i = 0; i < word.length; i++) {
        const key = word[i];

        time++; // 키 누르는 데 걸리는 시간 1
        if (key === prevLKey || key === prevRKey) continue;

        
        const [x, y, dir] = KEYBOARD_LATLNG[key];

        if (dir === 'l') {
            const [prevX, prevY] = KEYBOARD_LATLNG[prevLKey];
            time += Math.abs(prevX - x) + Math.abs(prevY - y);
            prevLKey = key;
        }
        else if (dir === 'r') {
            const [prevX, prevY] = KEYBOARD_LATLNG[prevRKey];
            time += Math.abs(prevX - x) + Math.abs(prevY - y);
            prevRKey = key;
        }
    }

    return time;
}

console.log(solution(input));

export {};
