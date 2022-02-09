//'in' checks for a property to be in an object.

const person = {
	name: "Ayush",
	age: 25,
};

delete person.name;

if ("name" in person) {
	console.log("Exists");
} else {
	console.log("Doesn't Exist");
}

if ("age" in person) {
	console.log("Exists");
} else {
	console.log("Doesn't Exist");
}
