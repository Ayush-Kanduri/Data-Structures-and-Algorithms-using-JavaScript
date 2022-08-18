//Match All - ES2020 - Features//
//Checks for and matches for a pattern in a string. Finds the substring in a string and returns an iterator which contains arrays with the index of all the matches, all inputs, all keywords.
//Best way to use regular expressions inside javascript.
let string =
	"Hello World, I love javascript so much that I am learning java and javascript.";
let substring = /javascript/g; //g is for global. g-global, i-ignore case, m-multiline mode

let result = string.matchAll(substring);
// console.log(result);
// for (const iterator of result) {
// 	console.log(iterator);
// }
console.log(...result);
