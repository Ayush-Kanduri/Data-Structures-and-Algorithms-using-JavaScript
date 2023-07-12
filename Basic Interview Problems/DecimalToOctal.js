/**
    * @function decimalToOctal
    * @description Converts a decimal number to octal
    * @param {number} decimal - The decimal number to be converted.
    Decimal Base is 10 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Octal Base is 8 --> [0, 1, 2, 3, 4, 5, 6, 7]
    Decimal to Octal --> 8|10 --> 8|5 (0) --> 8|2 (1) --> 8|1 (0)
    * @timeComplexity O(log n)
    * @spaceComplexity O(1)
    * @returns {number} - The Octal number
    * @example
    const decimal = 127;
    console.log(decimalToOctal(decimal));

    Output:
    177
**/

const decimalToOctal = (decimal) => {
	if (
		decimal === 0 ||
		decimal === 1 ||
		decimal === 2 ||
		decimal === 3 ||
		decimal === 4 ||
		decimal === 5 ||
		decimal === 6 ||
		decimal === 7
	) {
		return parseInt(decimal);
	}
	let dividend = decimal;
	let divisor = 8;
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

const decimal = 100;
console.log(decimalToOctal(decimal));
