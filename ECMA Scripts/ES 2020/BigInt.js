//Big Int - ES2020 - Features//
let max = Number.MAX_SAFE_INTEGER;
let max1 = max + 1;
let max3 = max + 2;
let max2 = max * 2;
console.log(max); //Maximum safe value which we can use as an integer
console.log(max1); //might give a wrong value since we exceeded the maximum safe value
console.log(max3); //might give a wrong value since we exceeded the maximum safe value
console.log(max2); //might give a wrong value since we exceeded the maximum safe value

console.log(typeof max); //number

console.log(max1 === max3); //true
console.log("\n");
//max1 and max3 are not equal because they are not the same value, but here we are getting max1===max3 as true. which is wrong evaluation.

// Hence we use BigInt to solve this problem.
max1 = BigInt(9007199254740991);
max3 = BigInt(9007199254740994);

console.log(typeof max1); //bigint
console.log(max1 === max3); //false

// max2= BigInt(9007199254740992)+1; - gives an error since we cant add number to a bigint
//BigInt is represented by Xn notation.
max2 = BigInt(9007199254740992) + BigInt(1);
console.log(max2);
max2 = 1n;
max2 = max2 + 3n;
console.log(max2);
