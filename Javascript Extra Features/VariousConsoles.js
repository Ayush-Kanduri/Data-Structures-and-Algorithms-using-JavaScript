//NOTE : Try out these codes in the browser console to understand the output.
//----------------------------------------------------//
//1. console.time() and console.timeEnd()
console.time("Time");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Time");
//----------------------------------------------------//
//2. console.log()
console.log("Hello World");
//----------------------------------------------------//
//3. console.warn()
console.warn("This is a warning");
//----------------------------------------------------//
//4. console.error()
console.error("This is an error");
//----------------------------------------------------//
//5. console.assert()
console.assert(
	1 === 2,
	"I check if 1 is equal to 2. If not, I throw an error, else I do nothing."
);
//----------------------------------------------------//
//6. console.table()
const obj = {
	name: "John",
	age: 30,
	city: "New York",
};
const obj2 = {
	name: "John",
	age: 30,
	city: "New York",
	street: {
		road: "MG Road",
	},
};
const arr = [
	{
		name: "John",
		age: 30,
		city: "New York",
	},
	{
		name: "Jane",
		age: 35,
		city: "New Delhi",
	},
	{
		name: "Jack",
		age: 40,
		city: "Kolkata",
	},
	{
		name: "Jones",
		age: 50,
		city: "Mumbai",
		street: {
			road: "MG Road",
		},
	},
];

console.table(obj);
console.table(obj2);
console.table(arr);
//----------------------------------------------------//
//7. console.exception()
console.exception("This is an exception");
//----------------------------------------------------//
//8. console.clear()
console.clear("This is a clear console");
//----------------------------------------------------//
//9. console.count() & console.countReset()
console.count("Ayush");
console.count("Ayush");
console.count("Ayush");
console.count("Kejriwal");
console.count("Kejriwal");
console.countReset("Ayush");
console.countReset("Kejriwal");
console.count("Ayush");
console.count("Kejriwal");
//----------------------------------------------------//
//10. console.group() & console.groupEnd()
console.log("Outer 1");

console.group();
console.log("Outer 2");

console.group();
console.log("Inner 1");

console.group();
console.log("Inner 2");

console.groupEnd();
console.log("Inner 1");

console.groupEnd();
console.log("Outer 2");

console.groupEnd();
console.log("Outer 1");
//----------------------------------------------------//
//11. console.groupCollapsed() & console.groupEnd()
console.log("Outer 1");

console.groupCollapsed();
console.log("Outer 2");

console.groupCollapsed();
console.log("Inner 1");

console.groupCollapsed();
console.log("Inner 2");

console.groupEnd();
console.log("Inner 1");

console.groupEnd();
console.log("Outer 2");

console.groupEnd();
console.log("Outer 1");
//----------------------------------------------------//
//12. console.trace()
function a() {
	function b() {
		function c() {
			function d() {
				console.trace("Stack Trace");
			}
			d();
		}
		c();
	}
	b();
}
a();
//----------------------------------------------------//
