/**
    * @function hexadecimalToDecimal
    * @description Converts a hexadecimal number to decimal.
    Decimal Base is 10 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Hexadecimal Base is 16 --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F]
    Hexadecimal to Decimal --> (... + 7*16^2 + C*16^1 + F*16^0)
    * @param {number} hexadecimal - The hexadecimal number to be converted
    * @timeComplexity O(n)
    * @spaceComplexity O(1)
    * @returns {number} - The decimal number
    * @example
    const hexadecimal = "7CF";
    console.log(hexadecimalToDecimal(hexadecimal));

    Output:
    1999
**/

const hexadecimalToDecimal = (hexadecimal) => {
	return parseInt(
		hexadecimal
			.split("")
			.reverse()
			.reduce((acc, val, index) => {
				let temp = val;
				if (val === "A") temp = 10;
				if (val === "B") temp = 11;
				if (val === "C") temp = 12;
				if (val === "D") temp = 13;
				if (val === "E") temp = 14;
				if (val === "F") temp = 15;
				if (acc === "A") acc = 10;
				if (acc === "B") acc = 11;
				if (acc === "C") acc = 12;
				if (acc === "D") acc = 13;
				if (acc === "E") acc = 14;
				if (acc === "F") acc = 15;
				return acc + Math.pow(16, index) * temp;
			}, 0)
	);
};

const hexadecimal = "7CF";
let hexadecimalRegex = /^[0-9A-Fa-f]+$/i;
let isValid = hexadecimalRegex.test(hexadecimal);
if (isValid) console.log(hexadecimalToDecimal(hexadecimal));
else console.log("Invalid Hexadecimal Number");
