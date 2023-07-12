/**
    * @function octalToDecimal
    * @description Converts a octal number to decimal.
    Decimal Base is 10 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Octal Base is 8 --> [0, 1, 2, 3, 4, 5, 6, 7]
    Octal to Decimal --> (... + 0*8^2 + 1*8^1 + 0*8^0)
    * @param {number} octal - The octal number to be converted
    * @timeComplexity O(n)
    * @spaceComplexity O(1)
    * @returns {number} - The decimal number
    * @example
    const octal = 137;
    console.log(octalToDecimal(octal));

    Output:
    95
**/

const octalToDecimal = (octal) => {
	return parseInt(
		octal
			.toString()
			.split("")
			.reverse()
			.reduce((acc, val, index) => (acc += Math.pow(8, index) * val), 0)
	);
};

const octal = 137;
console.log(octalToDecimal(octal));
