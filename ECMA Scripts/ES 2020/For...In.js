//For In - ES2020 - Features//
// For in loop is used to iterate through the objects properties.

let object = {
	name: "John",
	age: 30,
	city: "New York",
};

for (const key in object) {
	console.log(key, object[key]);
}
