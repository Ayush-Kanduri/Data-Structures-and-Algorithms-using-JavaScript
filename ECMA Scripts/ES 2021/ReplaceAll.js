//ReplaceAll - replaces all occurrences of a string with another string

const str =
	"Jack and Jill went up the hill to fetch a pail of water. Jack is well, and Jill is well. Jack and Jill went up the hill to fetch a pail of water. Jack is well, and Jill is well.";
// console.log(str.replace(/a/g,"A"));
const string = str.replaceAll("Jack", "Ayush").replaceAll("Jill", "Amit");
console.log(string);
