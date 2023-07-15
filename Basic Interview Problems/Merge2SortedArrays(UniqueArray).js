/**
    * @function merge
    * @description - Merge 2 arrays, sort them, create unique & non duplicate elements. 
    * @param {Array} arr1 - An array of numbers
    * @param {Array} arr2 - An array of numbers
    * @TimeComplexity - O((n+m)log(n+m))
    * @SpaceComplexity - O(n+m)
    * @returns {Array} - Unique Sorted Merged Array
    * @example
        console.log(merge([1, 3, 4, 5, 5], [2, 4, 4, 6, 8]));
        
        Output: 
        [1, 2, 3, 4, 5, 6, 8]
**/

const merge = (arr1, arr2) => {
	const arr3 = [...arr1, ...arr2];
	const newArr = [...arr3].sort((a, b) => a - b);
	return [...new Set(newArr)];
};

console.log(merge([1, 3, 4, 5, 5], [2, 4, 4, 6, 8]));
