/**** Test Cases ****/
const case1 = {
    cap: 4,
    n: 5,
    deliveries: [1, 0, 3, 1, 2],
    pickups: [0, 3, 0, 4, 0],
    result: 16,
}
const case2 = {
    cap: 2,
    n: 7,
    deliveries: [1, 0, 2, 0, 1, 0, 2],
    pickups: [0, 2, 0, 1, 0, 2, 0],
    result: 30,
}

// TODO:
//  1) d 여러개일 때 여러번 반복하게끔 while
//   if (그래도 결과 정확하지 않으면)
//  2) delivery랑 pickup 함께 하게끔

function getMoveCount(deliveries, cap) {
    const reversedDeliveries = deliveries.reverse();
    let deliveryMoving = 0;
    let deliveryRestCap = cap;

    reversedDeliveries.map((d, i, arr) => {
        const distFromWarehouse = arr.length - i
        if (i === 0) deliveryMoving += distFromWarehouse; // dist warehouse to target

        // 반복 구간
        let restD = d;
        if (deliveryRestCap < restD) {
            // restD가 0이 될때까지 뺌

            while (restD) {
                // 여기서 restD 0 만들어줄거임
                if (deliveryRestCap < restD) {
                    // restD(남은 d)보다 트럭 여유공간이 작은 경우
                    restD -= deliveryRestCap; // deliveryRestCap만큼 restD 빼고
                    deliveryMoving += (distFromWarehouse * 2) // 물류센터 다녀오기
                } else {
                    // restD(남은 d)보다 트럭 여유공간 있는 경우
                    deliveryRestCap -= restD
                }
            }
        } else deliveryRestCap -= restD;

        if (i + 1 === arr.length) {
            // move to warehouse
            deliveryMoving += 1;
        } else {
            if (deliveryRestCap - arr[i + 1] >= 0) {
                // move to next
                deliveryMoving += 1;
            } else {
                // move to warehouse and back to D
                deliveryMoving += distFromWarehouse
                deliveryMoving += distFromWarehouse - 1
                deliveryRestCap = cap;
            }
        }
    })

    return deliveryMoving;
}

function solution(cap, n, deliveries, pickups) {
    const deliveryMoving = getMoveCount(deliveries, cap);
    const pickupMoving = getMoveCount(pickups, cap);

    return Math.max(deliveryMoving, pickupMoving);
}

// console.log(solution(case1.cap, case1.n, case1.deliveries, case1.pickups));
console.log(solution(case2.cap, case2.n, case2.deliveries, case2.pickups));