const input = [1, 2, 1, 3, 1, 4, 1, 2];

const solution = (input) => {
    // 공평하게 먹는 경우의 수
    let theEqualCases = 0;

    // 1번 사람이 먹을 토핑 개수
    let firstToppings = new Map();

    // 2번 사람이 먹을 토핑 개수
    let secondToppings = new Map();
    input.forEach(topping => {
        const prevToppingCount = secondToppings.get(topping) ?? 0;
        secondToppings.set(topping, prevToppingCount + 1);
    });

    input.forEach(i => {
        // if firstToppingCount에 input 넣어보고
        const prevSecondToppingCount = secondToppings.get(i);

        if (prevSecondToppingCount > 1) secondToppings.set(i, prevSecondToppingCount - 1);
        else if (prevSecondToppingCount === 1) secondToppings.delete(i);

        firstToppings.set(i, (firstToppings.get(i) ?? 0) + 1);

        // if first map과 second map size가 같으면 theEqualCases++;
        if (firstToppings.size === secondToppings.size) theEqualCases++;
    })

    return theEqualCases;
}

console.log(solution(input))