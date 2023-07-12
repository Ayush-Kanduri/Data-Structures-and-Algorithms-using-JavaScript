//Problem: Find the no. of prime numbers till N.

//Input: n

//Output: No. of prime numbers till N.

//Example:
// Input: 10 => 4 prime numbers are 2,3,5,7
// Input: 20 => 8 prime numbers are 2,3,5,7,11,13,17,19

//Brute Force Method:
// Naive's Algorithm
// 1. Iterate till the number and check if "i" is prime or not.
// 2. If the number is prime, increment the count.
// 3. Return the count.
// Time Complexity: O(N^2)

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

//Solution:

// Sieve of Eratosthenes: Filter out the non-prime numbers.
//Time Complexity: O(Nlog(logN))
//1 2 3 4 5 6 7 8 9 10 11 12
//F T T F T F T F F F  T  F  -  Boolean Array
//For 2, Starts from second multiple of 2, jumps in multiples of 2, goes till N.
//For 3, Starts from second multiple of 3, jumps in multiples of 3,goes till N.
//For 4, it is already false because of 2.
//For 5, Starts from second multiple of 5, jumps in multiples of 5,goes till N.
//For 6, it is already false because of 2.
// .
// .
// .
// .
// For root of N, .......
//j=2*i => starts from 2nd multiple of i
//j<=n => goes till n
//j+=i => jumps in multiples of i

// O(log n) - for the algorithms that work by repeatedly cutting down the size of the input by some constant factor on each iteration.
// O(log(log n)) - for the algorithms that work by repeatedly taking the square root of the size of the input on each iteration.

let n = 20;
let boolean = new Array(n + 1);
boolean.fill(true);

boolean[0] = false;
boolean[1] = false;

let sieveOfEratosthenes = (n) => {
	if (n <= 1) return;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		for (let j = 2 * i; j <= n; j += i) {
			boolean[j] = false;
		}
	}
	return boolean;
};

let printPrimes = (n) => {
	let boolean = sieveOfEratosthenes(n);
	let count = 0;
	let primes = [];
	for (let i = 1; i <= boolean.length; i++) {
		if (boolean[i]) {
			primes.push(i);
			count++;
		}
	}
	console.log("Prime Numbers: " + primes);
	console.log("Count: " + count);
};

printPrimes(n);
