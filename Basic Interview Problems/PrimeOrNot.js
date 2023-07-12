//Problem: To check the number is prime or not.

//Input: n

//Output: Prime Number / Composite number

//Example:
// Input: 10 => Composite Number
// Input: 13 => Prime Number

//Brute Force Method:
// 1. Iterate till the number and check if "i" is prime or not.
// 2. Print the result.
// Time Complexity: O(N)

// Inefficient Solution //
// let num = 12;

// let isPrime = (num) => {
// 	if (num <= 1) return false;
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) return false;
// 	}
// 	return true;
// };

// let result = isPrime(num) ? "Prime Number" : "Composite Number";
// console.log(result);

//Solution:
//Time Complexity: O(Square Root(N))

let num = 18;
let isPrime = (num) => {
	if (num <= 1) return false;
	//i<=sqrt(num)
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

let result = isPrime(num) ? "Prime Number" : "Composite Number";
console.log(result);
