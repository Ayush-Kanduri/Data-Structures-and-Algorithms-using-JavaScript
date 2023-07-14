/**
    * @function reverse
    * @description This function reverses the given number
    * @param {number} num - The number to be reversed
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {number} - The reversed number
    * @example
        let num = 1234;
        console.log(reverse(num));

        Output:
        4321    
**/

const reverse = (num) => {
	let number = num.toString().split("").reverse().join("");
	if (number.endsWith("-")) number = "-" + number;
	return parseInt(number);
};
let num = -1234;
console.log(reverse(num));
