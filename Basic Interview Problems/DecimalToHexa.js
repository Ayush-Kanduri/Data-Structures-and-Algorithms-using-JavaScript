/**
    * @function decimalToHexadecimal
    * @description Converts a decimal number to Hexadecimal
    * @param {number} decimal - The decimal number to be converted.
    Decimal Base is 10 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Hexadecimal Base is 16 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F]
    Decimal to Hexadecimal --> 16|20 --> 16|1 (4) --> E
    * @timeComplexity O(log n)
    * @spaceComplexity O(1)
    * @returns {String} - The hexadecimal number
    * @example
    const decimal = 20;
    console.log(decimalToHexadecimal(decimal));

    Output:
    E
**/

const decimalToHexadecimal = (decimal) => {
	let dividend = decimal;
	let divisor = 16;
	let remainder = [];
	let quotient = 1;
	let match = {
		10: "A",
		11: "B",
		12: "C",
		13: "D",
		14: "E",
		15: "F",
	};
	do {
		quotient = Math.floor(dividend / divisor);
		let temp = Math.floor(dividend % divisor);
		if (temp >= 10 && temp <= 15) remainder.push(match[temp]);
		else remainder.push(temp);
		dividend = quotient;
	} while (quotient > 1);
	if (quotient !== 0) remainder.push(quotient);
	let res = remainder.reverse().join("");
	let X = 10;
	let newString = res;
	for (let i = 0; i <= 5; i++) {
		if (res.includes(`${X + i}`)) {
			newString = res.replace(`${X + i}`, match[X + i]);
		}
	}
	return newString;
};

const decimal = 20;
console.log(decimalToHexadecimal(decimal));
