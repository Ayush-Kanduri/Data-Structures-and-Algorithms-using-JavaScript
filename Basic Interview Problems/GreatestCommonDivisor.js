//GCD(x,y) means the greatest number which divides both x and y.

//Problem: Find the GCD of two numbers.

//Input: Two numbers x and y.

//Output: The GCD of x and y.

//Example:
// Brute Force Method:
// a=10, b=15
// gcd < a
// gcd < min(a,b)
// O(min(a,b)) Inefficient

//Solution:
// 1. Euclidean Algorithm
//gcd(a,b) = gcd(b, a % b) => Recursive Case
//gcd(a,0) = a => Base Case

let gcd = (a, b) => {
	return b === 0 ? a : gcd(b, a % b);
};

console.log(gcd(10, 15));
console.log(gcd(27, 9));
console.log(gcd(21, 9));
console.log(gcd(2, 4));
console.log(gcd(100, 200));
