const fs = require("fs");
const filepath = "./28068.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

type Suffer = number
type Joy = number

function solution([N, ...books]: string[]) {
    const bookMap: Map<Suffer, Array<Joy>> = new Map();

    books.forEach(book => {
        const [suffer, joy] = book.split('');
        const prevJoyList = bookMap.get(Number(suffer))

        if (prevJoyList) {
            prevJoyList.push(Number(joy));
            bookMap.set(Number(suffer), prevJoyList)
        } else {
            bookMap.set(Number(suffer), [Number(joy)])
            
        }
    })

    // bookMap sort 오름차순 0부터 깎고 즐거움을 쌓아가면서, 만약 사용할 수 있는 즐거움이 없으면 0 / 끝까지 됐으면 1 출력
    // new Array(bookMap.entries()).sort((a, b) => (a [0] - b[0]))
    const sortedList = [];

    for (let [key, value] of new Array(bookMap.entries())) {
        console.log({value})
        sortedList.push([key, value])
    }
    ;
    console.log({sortedList, bookMap})
}

solution(input)

export {}