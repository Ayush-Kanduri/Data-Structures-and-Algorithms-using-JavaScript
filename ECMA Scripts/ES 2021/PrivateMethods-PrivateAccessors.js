//Private methods are accessible only within the class in which they are defined. They can be accessed by the public methods defined within the class.
//Private accessors are accessible only within the class in which they are defined. They can be accessed by the public accessors defined within the class.

class Person {
	showName() {
		console.log("Ayush");
	}
	//Private Method
	#showAge() {
		console.log(25);
	}
	showAllMethods() {
		this.showName();
		this.#showAge();
	}
	get Name() {
		return "Ayush";
	}
	//Private Accessor
	get #Age() {
		return 25;
	}
	get publicAge() {
		return this.#Age;
	}
}

const person = new Person();
person.showName();
// person.showAge(); - throws error: private method
person.showAllMethods();
console.log("\n");
console.log(person.Name);
// console.log(person.Age); - undefined: private accessor
console.log(person.publicAge);
