function average(nums) {
    return nums.reduce(plus) / nums.length;
}

function plus(a, b) {
    return a + b
}

console.log(average([1, 2, 3, 4, 5]));


function averagePurchaseTotals(customers) {
    return customers.map(c => {
        const purchaseTotals = c.purchases.map(p => p.total);

        return average(purchaseTotals)
    })
}