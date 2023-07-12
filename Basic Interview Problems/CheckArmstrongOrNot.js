/** 
    * @function armstrong
    * @description This function checks if the given number is an Armstrong number or not
    [...String(X)] is same as X.toString()split()
    * @param {number} X - The number to be checked
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {string} - The result of the check
    * @example
        let X = 232;
        console.log(armstrong(X) === X ? `Armstrong` : `Not Armstrong`);

        Output:
        Not Armstrong
**/

const armstrong = (X) =>
	parseInt(
		X.toString()
			.split("")
			.reduce((acc, val) => acc + Math.pow(val, 3), 0)
	);

let X = 153;
console.log(armstrong(X) === X ? `Armstrong` : `Not Armstrong`);
