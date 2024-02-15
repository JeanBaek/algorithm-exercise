/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
	// const cheapestPrice = Math.min(...prices);
	// const cheapestDay = prices.indexOf(cheapestPrice);
	// const pricesAfterCheapest = prices.slice(cheapestDay + 1);

	// if (!pricesAfterCheapest.length) return 0;

	// return Math.max(...pricesAfterCheapest) - cheapestPrice;

	const highestPrice = Math.max(...prices);
	const highestDay = prices.indexOf(highestPrice);
	const pricesBeforeHighest = prices.slice(0, highestDay);

	if (!pricesBeforeHighest.length) return 0;

	return highestPrice - Math.min(...pricesBeforeHighest);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
