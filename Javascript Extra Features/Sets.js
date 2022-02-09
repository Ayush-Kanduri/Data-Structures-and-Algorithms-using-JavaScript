//Sets are used in place of arrays when we want to use unique values in an effective and efficient manner.
//Sets are used to store unique values. It is used for arrays. It remembers the original insertion order of the values.

const numbers = [1, 2, 3, 3, 3, 4];

let set = new Set(numbers); //set is an object.

console.log(set);

console.log(set.add(5)); //adds the value 5 to the set.

console.log(set.size); //Returns the number of values in the set.

console.log(set.has(3)); //Returns true if the set has the value.

set.forEach((value) => {
	console.log(value);
}); //Iterates over the values in the set.

console.log(set.keys()); //Returns an iterator object of keys.
console.log(set.values()); //Returns an iterator object of values.
console.log(set.entries()); //Returns an entries object of entries.

set.delete(3);
console.log(set); //Deletes the value 3 from the set.
set.clear();
console.log(set); //Clears the set.

const country = "India";
let set1 = new Set(country);
console.log(set1);

//To remove duplicate elements from an array.
let array = [1, 2, 3, 3, 3, 4];
let set2 = new Set(array);
console.log([...set2]); //The spread operator is used to convert the set to an array.
console.log([...new Set(array)]); //The spread operator is used to convert the set to an array.
console.log([...new Set(set2)]); //The spread operator is used to convert the set to an array.
