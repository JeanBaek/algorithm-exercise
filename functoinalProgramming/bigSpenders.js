function bigSpenders(customer) {
    const buyMoreThanHundred = customer.filter(buyMoreThanHundredAtLeastOnce);
    const buyMoreThanTwice = buyMoreThanHundred.filter(c => isMoreThanTwice(c.purchases.length));

    return buyMoreThanTwice
}

function buyMoreThanHundredAtLeastOnce(customer) {
    return !!customer.purchases.filter(isMoreThanHundred).length
}

function isMoreThanHundred(purchase) {
    return purchase.amount > 100;
}

function isMoreThanTwice(num) {
    return num >= 2;
}