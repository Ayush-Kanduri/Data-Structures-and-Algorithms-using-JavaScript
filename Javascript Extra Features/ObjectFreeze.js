//Object Freeze - this property is used to freeze the object. Const only works on objects reference address to make it immutable but not the object properties itself, they are still mutable.
//So Objects.freeze will make immutable objects when we want to fix the properties of the object.

const person = Object.freeze({
	name: "John",
	age: 30,
	city: "New York",
	occupation: Object.freeze({
		sector: "Private",
	}),
	currency: Object.freeze(["INR", "USD"]),
});

console.log(person.name);
console.log(person.occupation.sector);
console.log(person.currency);
person.name = "Jane";
person.occupation.sector = "Public";
//person.currency.push("EUR"); //this will throw an error as the object is frozen
console.log(person.name);
console.log(person.occupation.sector);
console.log(person.currency);
