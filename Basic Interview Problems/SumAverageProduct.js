/**
    * @function sumAverageProduct
    * @description - Finds the sum, average, and the product of numbers in the array
    * @param {Array} arr - An array of numbers
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(1)
    * @returns {Object} - An object containing the sum, average, and product of numbers in the array
    * @example
        const resultObj = sumAverageProduct([1, 2, 3]);
        console.log(resultObj);
        // Output: Sum = 6, Average = 2, Product = 6 //
**/

function sumAverageProduct(arr) {
	let product = 1;
	let avg = 0;
	const sum = arr.reduce((acc, val, index, arr) => {
		product *= val;
		return acc + val;
	}, 0);
	return {
		sum,
		avg: sum / arr["length"],
		product,
	};
}

const arr = [1, 2, 3, 4, 5, 6, 7];
let { sum, avg, product } = sumAverageProduct(arr);
console.log(`Sum = ${sum}, Average = ${avg}, Product = ${product}`);
