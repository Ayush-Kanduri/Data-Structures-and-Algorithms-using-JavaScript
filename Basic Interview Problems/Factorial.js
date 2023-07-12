/**
    * @function iterativeFactorial
    * @description - This function takes a number as input and returns the factorial of that number iteratively.
    * @param {Number} num - A number
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(1)
    * @returns {Number} - A number
    * @example
        const num = 5;
        console.log(iterativeFactorial(num));

        Output:
        120


    * @function recursiveFactorial
    * @description - This function takes a number as input and returns the factorial of that number recursively.
    * @param {Number} num - A number
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(n)
    * @returns {Number} - A number
    * @example
        const num = 5;
        console.log(recursiveFactorial(num));

        Output:
        120
**/

const iterativeFactorial = (num) => {
	let fact = 1;
	for (let i = 1; i <= num; i++) fact = fact * i;
	return fact;
};

const recursiveFactorial = (num) => {
	if (num === 1) return 1;
	return num * recursiveFactorial(num - 1);
};

const num = 5;
console.log(iterativeFactorial(num));
console.log(recursiveFactorial(num));
