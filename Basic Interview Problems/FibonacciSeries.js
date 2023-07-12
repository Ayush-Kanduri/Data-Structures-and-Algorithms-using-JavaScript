/**
    * @function iterative
    * @description - Prints the fibonacci series upto the given number in an iterative approach
    * @param {Number} num
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(1)
    * @example
        console.log("Iterative");
        iterative(5);
        
        Output: 
        Iterative
        0 1 1 2 3 5


    * @function recursive
    * @description - Prints the fibonacci series upto the given number in a recursive approach
    * @param {Number} num
    * @TimeComplexity O(2^n)
    * @SpaceComplexity O(n)
    * @example
        console.log("Recursive");
        recursive(5);
        
        Output: 
        Recursive
        0 1 1 2 3 5
**/

const num = 10;
let value = 0;
let i = 0;
let first = 0;
let second = 1;
let third = first + second;

const iterative = (num) => {
	console.log(first);
	while (third <= num) {
		console.log(third);
		third = first + second;
		first = second;
		second = third;
	}
};

const recursive = (num) => {
	const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
	while (value <= num) {
		value = fib(i);
		if (value > num) break;
		else console.log(value);
		i++;
	}
};

console.log("Iterative");
iterative(num);
console.log("--------------");
console.log("Recursive");
recursive(num);
