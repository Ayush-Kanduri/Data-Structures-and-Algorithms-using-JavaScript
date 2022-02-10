//Trailing zeroes means zeroes ending in a number.

//Problem: Find the factorial and trailing zeroes of that number.

//Input: x

//Output: Factorial and trailing zeroes of that number.

//Example:
// 5! = 5*4*3*2*1 = 120, Trailing zeroes = 1
// 6! = 6*5*4*3*2*1 = 720, Trailing zeroes = 1
// 7! = 7*6*5*4*3*2*1 = 5040, Trailing zeroes = 2

//Solution:
// n! = n*(n-1)*(n-2)*...*1
// Trailing Zeroes n! = Floor(n/5^1)+Floor(n/5^2)+Floor(n/5^3)......
// As there are more no. of 2s than no. of 5s in a factorial >= 5! , we can use this fact to find the trailing zeroes.
// n! => 2*2*2*.....5*5*5 => since for every 5 there is a 2 as 2s are more than 5s, & 5*2=10, So we need to count no. of 5s in n!
// No. of 5s in n! = Trailing Zeroes in n! , so we need to continue the series until               Floor(n/5^x) = 0.
//O(log5(n)) as we are incrementally dividing n by power of 5.

let n = 7;

let factorial = (n) => {
	let fact = 1;
	for (let i = 2; i <= n; i++) {
		fact *= i;
	}
	return fact;
};
// let trailingZeroesFromFactorial = (num) => {
// let rem = 0;
// let count = 0;
// let i = num;
// while (i > 0) {
// 	rem = i % 10;
// 	if (rem === 0) {
// 		count++;
// 	} else {
// 		break;
// 	}
// 	i = Math.floor(i / 10);
// }
// return count;

// let str = num.toString();
// let count = 0;
// let arr = str.split("");
// for (let i = arr.length-1; i >= 0; i--) {
// 	if (arr[i] === "0") {
// 		count++;
// 	} else {
// 		break;
// 	}
// }
// return count;
// };
let trailingZeroes = (n) => {
	let count = 0;
	let i = 1;
	while (Math.floor(n / Math.pow(5, i)) !== 0) {
		count += Math.floor(n / Math.pow(5, i));
		i++;
	}
	return count;
};
console.log("Factorial: " + factorial(n));
console.log("Trailing Zeroes: " + trailingZeroes(n));
// console.log("Trailing Zeroes: " + trailingZeroesFromFactorial(factorial(n)));
