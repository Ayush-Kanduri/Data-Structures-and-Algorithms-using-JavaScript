/**
     * @function add2BinaryNumbers
     * @description This function adds two binary numbers and returns the result
     * @param {string} binary1 - The first binary number
     * @param {string} binary2 - The second binary number
     * @timeComplexity O(n)
     * @spaceComplexity O(n)
     * @returns {string} - The result of adding the two binary numbers
     * @example
        const binary1 = "10101";
        const binary2 = "010";
        console.log(add2BinaryNumbers(binary1, binary2));

        Output:
        10111
 **/

const add2BinaryNumbers = (binary1, binary2) => {
	const maxLength = Math.max(binary1.length, binary2.length) - 1;
	if (binary1.length === maxLength + 1 && binary2.length === maxLength + 1) {
	} else if (
		binary1.length === maxLength + 1 &&
		binary2.length !== maxLength + 1
	) {
		for (let i = 0; i <= maxLength + 1 - binary2.length; i++) {
			binary2 = "0" + binary2;
		}
	} else {
		for (let i = 0; i <= maxLength + 1 - binary1.length; i++) {
			binary1 = "0" + binary1;
		}
	}
	let binaryArray1 = binary1.split("");
	let binaryArray2 = binary2.split("");
	let carry = Array(maxLength + 1).fill("0");
	let result = Array(maxLength + 1).fill("0");
	for (let i = maxLength; i >= 0; i--) {
		if (binaryArray1[i] === "0" && binaryArray2[i] === "0") {
			if (carry[i] === "0") {
				result[i] = "0";
				carry[i - 1] = "0";
			} else {
				result[i] = "1";
				carry[i - 1] = "0";
			}
		} else if (binaryArray1[i] === "1" && binaryArray2[i] === "0") {
			if (carry[i] === "0") {
				result[i] = "1";
				carry[i - 1] = "0";
			} else {
				result[i] = "0";
				carry[i - 1] = "1";
				if (i - 1 < 0) {
					result.unshift("0");
					carry.unshift("1");
					binaryArray1.unshift("0");
					binaryArray2.unshift("0");
					i++;
				}
			}
		} else if (binaryArray1[i] === "0" && binaryArray2[i] === "1") {
			if (carry[i] === "0") {
				result[i] = "1";
				carry[i - 1] = "0";
			} else {
				result[i] = "0";
				carry[i - 1] = "1";
				if (i - 1 < 0) {
					result.unshift("0");
					carry.unshift("1");
					binaryArray1.unshift("0");
					binaryArray2.unshift("0");
					i++;
				}
			}
		} else if (binaryArray1[i] === "1" && binaryArray2[i] === "1") {
			if (carry[i] === "0") {
				result[i] = "0";
				carry[i - 1] = "1";
				if (i - 1 < 0) {
					result.unshift("0");
					carry.unshift("1");
					binaryArray1.unshift("0");
					binaryArray2.unshift("0");
					i++;
				}
			} else {
				result[i] = "1";
				carry[i - 1] = "1";
				if (i - 1 < 0) {
					result.unshift("1");
					carry.unshift("1");
					binaryArray1.unshift("0");
					binaryArray2.unshift("0");
					i++;
				}
			}
		}
	}
	return result.join("");
};

const binary1 = "10101";
const binary2 = "010";
console.log(add2BinaryNumbers(binary1, binary2));
