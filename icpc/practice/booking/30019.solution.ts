const fs = require("fs");
const filepath = "./30019.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([NM, ...bookingData]: string[]) {
    console.log({NM, bookingData})
    const [N] = NM.split(' ').map(Number)
    const classRoomEndTime = new Map(new Array(N).fill(null).map((_, i) => [i + 1, 0]))

    bookingData.forEach(b => {

        const [classroom, s, e] = b.split(' ').map(Number);
        if ((classRoomEndTime.get(classroom) ?? 0) <= s) {
            console.log('YES');
            classRoomEndTime.set(classroom, e);
        } else {
            console.log('NO');
        }
    })
}

solution(input)

export {};
