//Null Coalescing Operator - ES2020 - Features//
const person = {
	male: {
		name: "",
		age: 0,
	},
};

let name, age;

result = person.male.name; // if name is Ayush => Ayush
age = person.male.age; // if age is 25 => 25
result = person.male.name || "Ayush"; // if name is undefined, null or doesn't exist => Ayush
age = person.male.age || 25; // if age is undefined, null or doesn't exist => 25

//But if name is "" empty string or age is 0, and if we need those original values instead of Ayush & 25, then
//But if name is undefined, null or doesn't exist or age is undefined, null or doesn't exist, so we get Ayush & 25 in that case
result = person.male.name ?? "Ayush";
age = person.male.age ?? 25;

console.log(result, age);

//Nullish Operator considers "" & 0, as true value only. Hence it returns it.
//Otherwise, it considers null & undefined, as false value only. Hence doesn't return it.
