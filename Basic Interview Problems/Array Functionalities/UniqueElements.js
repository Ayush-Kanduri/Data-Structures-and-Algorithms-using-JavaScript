/**
    * @function uniqueElements
    * @description This function removes the duplicate elements from an array
    * @param {Array} arr - Elements
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {Array} - Unique elements
    * @example
        console.log(uniqueElements(["a", "b", "c", "d", "a", "b", "b", "c", "d"]));

        Output:
        ['a', 'b', 'c', 'd'] 
**/

function uniqueElements(arr) {
	let nonDuplicateElements = arr.reduce((acc, curr, index, a) => {
		// if (acc.indexOf(curr) === -1) acc.push(curr);
		if (!acc.includes(curr)) acc.push(curr);
		return acc;
	}, []);
	return nonDuplicateElements;
}

console.log(uniqueElements(["a", "b", "c", "d", "a", "b", "b", "c", "d"]));
