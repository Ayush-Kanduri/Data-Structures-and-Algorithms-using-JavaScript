/**
    * @function decimalToBinary
    * @description Converts a decimal number to binary
    * @param {number} decimal - The decimal number to be converted.
    Decimal Base is 10. 
    Binary Base is 2.
    Decimal to Binary --> 2|10 --> 2|5 (0) --> 2|2 (1) --> 2|1 (0)
    * @timeComplexity O(log n)
    * @spaceComplexity O(1)
    * @returns {number} - The binary number
    * @example
    const decimal = 50;
    console.log(decimalToBinary(decimal));

    Output:
    110010
**/

const decimalToBinary = (decimal) => {
	if (decimal === 0) return 0;
	if (decimal === 1) return 1;
	let dividend = decimal;
	let divisor = 2;
	let remainder = [];
	let quotient = 1;
	do {
		quotient = Math.floor(dividend / divisor);
		remainder.push(dividend % divisor);
		dividend = quotient;
	} while (quotient > 1);
	remainder.push(quotient);
	return parseInt(remainder.reverse().join(""));
};

const decimal = 50;
console.log(decimalToBinary(decimal));
