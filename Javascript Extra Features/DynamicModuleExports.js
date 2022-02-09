//Static Module Export
import add from "./module2.mjs";

console.log("Inside Main Program");
console.log(add(1, 2));

//Dynamic Module Import - Import code from the modules only when you need it.
if (true) {
	//import() - returns a promise with a value of the module's default export
	//then - returns an actual module object. This object contains a property for the default export called default.

	// import("./module.mjs").then(({ default: print }) => {
	// 	console.log(print());
	// });
	(async () => {
		const { default: print } = await import("./module1.mjs");
		console.log(print());
	})();
}
