//Problem: Find the no. of prime numbers till N.

//Input: n

//Output: No. of prime numbers till N.

//Example:
// Input: 10 => 4 prime numbers are 2,3,5,7
// Input: 20 => 8 prime numbers are 2,3,5,7,11,13,17,19

//Brute Force Method:
// 1. Iterate till the number and check if "i" is prime or not.
// 2. If the number is prime, increment the count.
// 3. Return the count.
// Time Complexity: O(N^2)

//Solution:
// Inefficient Solution //
// let num = 30;
// let count = 0;
// let prime = [];

// let isPrime = (num) => {
// 	if (num <= 1) return false;
// 	for (let i = 2; i <= num / 2; i++) {
// 		if (num % i === 0) return false;
// 	}
// 	prime.push(num);
// 	return true;
// };

// let countPrime = (num) => {
// 	for (let i = 2; i <= num; i++) {
// 		if (isPrime(i)) {
// 			count++;
// 		}
// 	}
// };

// countPrime(num);
// console.log("Prime Numbers: " + prime);
// console.log("Count: " + count);

// Efficient Solution //
