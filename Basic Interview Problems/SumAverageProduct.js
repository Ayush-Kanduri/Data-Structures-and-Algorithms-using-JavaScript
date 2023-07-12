// Info: Find the sum, average, a product of numbers

const arr = [1, 2, 3, 4, 5, 6, 7];
let product = 1;

const sum = arr.reduce((acc, val, index, arr) => {
	product *= val;
	return acc + val;
}, 0);

console.log(`Sum = ${sum}, Average = ${sum / arr["length"]}, Product = ${product}`);

// Output: Sum = 28, Average = 4, Product = 5040
