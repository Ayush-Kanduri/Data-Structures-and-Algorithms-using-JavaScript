/**
    * @function pythagoreanTriplet
    * @description - This function takes an array of numbers and checks if the numbers are a pythagorean triplet
    * @param {Array} numbers - An array of numbers
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(1)
    * @returns {String} - Pythagorean Triplet or Not A Pythagorean Triplet
    * @example
        let numbers = [8, 3, 4];
        console.log(pythagoreanTriplet(numbers));
        
        Output: 
        Not A Pythagorean Triplet
**/

const pythagoreanTriplet = (numbers) => {
	let max = Math.max(...numbers);
	let result = numbers.reduce((acc, val) => {
		if (val === max) return acc;
		return acc + val * val;
	}, 0);
	return result === Math.pow(max, 2)
		? `Pythagorean Triplet`
		: `Not A Pythagorean Triplet`;
};

let numbers = [3, 4, 5];
console.log(pythagoreanTriplet(numbers));
