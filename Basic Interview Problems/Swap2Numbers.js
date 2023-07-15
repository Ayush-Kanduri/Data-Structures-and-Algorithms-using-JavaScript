/**
    * @function swap2Numbers
    * @description - Swaps two numbers without using a temporary variable
    * @TimeComplexity - O(1)
    * @SpaceComplexity - O(1)
    * @example
        swap2Numbers();

        Output: 
        a = 30, b = 20


    * @function swap2NumbersUsingArrayDestructuring
    * @description - Swaps two number using array destructuring
    * @TimeComplexity - O(1)
    * @SpaceComplexity - O(1)
    * @example
        swap2NumbersUsingArrayDestructuring();

        Output: 
        a = 30, b = 20
**/

function swap2Numbers() {
	let a = 20;
	let b = 30;
	console.log(`Before Swap: a = ${a}, b = ${b}`);
	a = a + b;
	b = a - b;
	a = a - b;
	console.log(`After Swap: a = ${a}, b = ${b}`);
}
swap2Numbers();

function swap2NumbersUsingArrayDestructuring() {
	let a = 20;
	let b = 30;
	console.log(`Before Swap: a = ${a}, b = ${b}`);
	[a, b] = [b, a];
	console.log(`After Swap: a = ${a}, b = ${b}`);
}
swap2NumbersUsingArrayDestructuring();
