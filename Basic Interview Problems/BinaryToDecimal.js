/**
    * @function binaryToDecimal
    * @description Converts a binary number to decimal.
    Decimal Base is 10 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Binary Base is 2 --> [0, 1]
    Binary to Decimal --> (... + 0*2^2 + 1*2^1 + 0*2^0)
    * @param {number} binary - The binary number to be converted
    * @timeComplexity O(n)
    * @spaceComplexity O(1)
    * @returns {number} - The decimal number
    * @example
    const binary = "1108C10";
    console.log(binaryToDecimal(binary));

    Output:
    Invalid Binary Number
**/

const binaryToDecimal = (binary) => {
	return parseInt(
		binary
			.split("")
			.reverse()
			.reduce((acc, val, index) => (acc += Math.pow(2, index) * val), 0)
	);
};

const binary = "110010";
let binaryRegex = /^[01]+$/i;
let isValid = binaryRegex.test(binary);
if (isValid) console.log(binaryToDecimal(binary));
else console.log("Invalid Binary Number");
