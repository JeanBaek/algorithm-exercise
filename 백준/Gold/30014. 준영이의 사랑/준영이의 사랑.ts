const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

class Deque {
    items: Array<any>

    constructor() {
        this.items = [];
    }

    // 덱의 앞쪽에 요소 추가
    addFront(element: any) {
        this.items.unshift(element);
    }

    // 덱의 뒤쪽에 요소 추가
    addRear(element: any) {
        this.items.push(element);
    }

    // 덱의 앞쪽에서 요소 제거하고 반환
    removeFront() {
        if (!this.isEmpty()) {
            return this.items.shift();
        }
    }

    // 덱의 뒤쪽에서 요소 제거하고 반환
    removeRear() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    // 덱의 크기 반환
    size() {
        return this.items.length;
    }

    // 덱이 비어있는지 확인
    isEmpty() {
        return this.size() === 0;
    }

    // 덱의 앞쪽 요소 반환
    peekFront() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    }

    // 덱의 뒤쪽 요소 반환
    peekRear() {
        if (!this.isEmpty()) {
            return this.items[this.size() - 1];
        }
    }

    // 덱 순회
    forEach(callback: (value: any, index: number, array: any[]) => void) {
        this.items.forEach(callback);
    }
}


function solution([N, P]: string[]) {
    // const sortedPList = P.split(' ').map(Number).sort((a, b) => a - b);
    const sortedPList = P.split(' ').map(Number).sort((a, b) => a - b);
    const deque = new Deque();


    for (let i = 0; i < sortedPList.length; i++) {
        if (i % 2) deque.addRear(sortedPList[i]);
        else deque.addFront(sortedPList[i]);
    }

    let firstEl;
    let X = 0;
    const perls: any[] = []
    deque.forEach((el, idx, arr) => {
        if (idx === 0) firstEl = el
        perls.push(el)
        if (idx === arr.length - 1) {
            // it is the last
            return X += el * arr[0]
        }

        return X += el * arr[idx + 1]
    })

    console.log(X)
    console.log(perls.join(' '))
}

solution(input)
