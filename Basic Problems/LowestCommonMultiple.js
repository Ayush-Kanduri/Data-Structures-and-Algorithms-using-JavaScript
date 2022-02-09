//LCM(x,y) means the lowest common multiple of both x and y.

//Problem: Find the LCM of two numbers.

//Input: Two numbers x and y.

//Output: The LCM of x and y.

//Solution:
// 1. Euclidean Algorithm
//gcd(a,b) = gcd(b, a % b) => Recursive Case
//gcd(a,0) = a => Base Case
//lcm(a,b) = a * b / gcd(a,b)

let gcd = (a, b) => {
	return b === 0 ? a : gcd(b, a % b);
};

let lcm = (a, b) => {
	let product = a * b;
	return product / gcd(a, b);
};

console.log(lcm(16, 20));
console.log(lcm(11, 33));
console.log(lcm(21, 9));
console.log(lcm(2, 4));
console.log(lcm(100, 200));
