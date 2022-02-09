//Generator Function is a function that can be used to iterate over a sequence of values.
//Generator function is a function which returns an object.
//These values can be thought as return but just that it doesn't end the function execution and yields the value as a form of an object. value is value and done means the execution has finished or not.
//value - undefined means no more value left to yield. done - true means execution has finished.

function* generatorFunction() {
	console.log("Starting");
	console.log("Before 1");
	yield 1;
	console.log("After 1");
	console.log("Before 2");
	yield 2;
	console.log("After 2");
	console.log("Before 3");
	yield 3;
	console.log("After 3");
	console.log("Ending");
}

function* idGeneratorFunction(i) {
	let id = i;
	while (true) {
		yield id++;
	}
}

const generator = generatorFunction();
for (let i = 0; i <= 3; i++) {
	console.log(generator.next());
}

console.log("\n");

let idGenerator;
loop: for (let i = 1; i <= 5; i++) {
	if (i === 1) {
		idGenerator = idGeneratorFunction(i);
	}
	console.log(idGenerator.next());
}
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
