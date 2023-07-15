let str = "Hello";
let string = new String(str);
let num = 123;
let number = new Number(num);
let bool = true;
let boolean = new Boolean(bool);
let regEx = /ab+c/;
let date = new Date();
let arr = [1, 2, 3];
let array = new Array(arr);
let obj = { name: "Ayush" };
let object = new Object(obj);

let AFunc = (name) => {};

// class Func { constructor(name) { this.name = name; } }
function Func(name) {
	this.name = name;
}
const func = new Func("John");

class A {
	constructor() {
		this.a = 10;
	}
}
let a = new A();

console.log(str instanceof String); // false
console.log(num instanceof Number); // false
console.log(bool instanceof Boolean); // false

console.log(string instanceof String); // true
console.log(number instanceof Number); // true
console.log(boolean instanceof Boolean); // true

console.log(regEx instanceof RegExp); // true
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(obj instanceof Object); // true

console.log(array instanceof Array); // true
console.log(array instanceof Object); // true
console.log(object instanceof Object); // true

console.log(AFunc instanceof Function); // true
console.log(AFunc instanceof Object); // true

console.log(a instanceof A); // true
console.log(a instanceof Function); // false
console.log(a instanceof Object); // true
console.log(A instanceof Function); // true
console.log(A instanceof Object); // true

console.log(func instanceof Function); // false
console.log(func instanceof Object); // true
console.log(func instanceof Func); // true
console.log(Func instanceof Function); // true
console.log(Func instanceof Object); // true
