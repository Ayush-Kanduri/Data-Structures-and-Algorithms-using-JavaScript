// 3. Optional Chaining - ES2020 - Features //
const creature = {
	mammal: {
		human: {
			male: {
				name: "Ayush",
			},
		},
	},
	print: function () {
		console.log("\nMammal");
	},
	a: [1, 2, 3],
};

// const name1 = creature.mammal.human.male.name;
// // const name2 = creature.mammal.human.female.name; - throws an error Cannot read property 'name' of undefined

// if (
// 	creature &&
// 	creature.mammal &&
// 	creature.mammal.human &&
// 	creature.mammal.human.male &&
// 	creature.mammal.human.male.name
// ) {
// 	console.log(name1);
// 	// console.log(name2);
// 	console.log(true);
// }

//If creature exists, go forward
//If creature.mammal exists, go forward
//If creature.mammal.human exists, go forward
//If creature.mammal.human.male exists, go forward
//If creature.mammal.human.male.name exists, go forward

// If the property doesn't exist then the . operator gives the error in accessing the undefined data.
// But optional chaining makes it easier to access the object properties by accessing even the undefined if the property doesn't exist. That too without an error.

const name1 = creature?.mammal?.human?.male?.name;
const name2 = creature?.mammal?.human?.female?.name;

if (name1) {
	console.log(name1);
	console.log(name2);
	console.log(true);
}

//Check if print exists & if it exists, then check if print is a function ()
//If yes then call it else do nothing
creature.print?.();

console.log(creature?.a);
//Check if 'a' exists & if it exists, then check if it is an array
//If yes then print a[0] it else undefined
// console.log(creature?.a[0]);
console.log(creature?.a?.[0]);

console.log(creature?.b);
console.log(creature?.b?.[9]);
