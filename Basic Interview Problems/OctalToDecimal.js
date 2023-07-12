/**
    * @function octalToDecimal
    * @description Converts a octal number to decimal.
    Decimal Base is 10 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Octal Base is 8 --> [0, 1, 2, 3, 4, 5, 6, 7]
    Octal to Decimal --> (... + 1*8^2 + 3*8^1 + 7*8^0)
    * @param {number} octal - The octal number to be converted
    * @timeComplexity O(n)
    * @spaceComplexity O(1)
    * @returns {number} - The decimal number
    * @example
    const octal = 138;
    console.log(octalToDecimal(octal));

    Output:
    Invalid Octal Number
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
let octalRegex = /^(0o)?[0-7]+$/i;
let isValid = octalRegex.test(octal);
if (isValid) console.log(octalToDecimal(octal));
else console.log("Invalid Octal Number");
