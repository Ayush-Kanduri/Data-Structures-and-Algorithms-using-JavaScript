/**
    * @function union
    * @description - This function takes two arrays as input and returns the union of those two arrays.
    Then we have used Set to remove duplicate elements from the result array. Finally we
    have used spread operator & [] to convert the Set to an array.
    The output will be an Array containing all unique values between both Arrays.
    * @param {Array} arr1 - An array
    * @param {Array} arr2 - An array
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(n)
    * @returns {Array} - An array
    * @example
        const arr1 = [4, 9, 5];
        const arr2 = [9, 4, 9, 8, 4];
        const unionArray = union(arr1, arr2);
        console.log(unionArray);
        
        Output: 
        [4, 9, 5, 8]
**/

const union = (arr1, arr2) => {
	const newArr = [...arr1, ...arr2];
	return [...new Set(newArr)];
};

const arr1 = [4, 9, 5];
const arr2 = [9, 4, 9, 8, 4];
const unionArray = union(arr1, arr2);
console.log(unionArray);
