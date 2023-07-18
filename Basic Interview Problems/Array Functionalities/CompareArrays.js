/**
    * @function compareArrays
    * @description - Compares 2 arrays for the equality check such that both of the arrays must have same length & the same elements but the order can be different.
    * @param {Array} arr1 - An array of numbers
    * @param {Array} arr2 - An array of numbers
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(n)
    * @returns {Boolean} - true (equal) or false (unequal)
    * @example
        let arr1 = [5, 4, 8, 4, 9];
		let arr2 = [4, 5, 8, 9, 4];
		console.log(compareArrays(arr1, arr2));
        
        Output: 
        true
**/

const compareArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	const map = new Map();
	for (const item of arr1) {
		if (map.has(item)) map.set(item, map.get(item) + 1);
		else map.set(item, 1);
	}
	for (const item of arr2) {
		if (!map.has(item)) return false;
		map.set(item, map.get(item) - 1);
		if (map.get(item) === 0) map.delete(item);
	}
	return map.size === 0;
};

let arr1 = [5, 4, 8, 10, 9];
let arr2 = [5, 10, 8, 9, 4];
console.log(compareArrays(arr1, arr2));
