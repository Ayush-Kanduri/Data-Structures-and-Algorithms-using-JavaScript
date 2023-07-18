/**
    * @function removeDuplicates
    * @description This function removes the duplicate numbers from an array
    * @param {Array} arr - Numbers
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {Array} - Unique numbers
    * @example
        let arr = [1, 1, 1, 2, 2, 23, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9];
        console.log(removeDuplicates(arr));

        Output:
        [1, 2, 23, 3, 4, 5, 6, 7, 8, 9]    
**/

const removeDuplicates = (arr) => [...new Set(arr)];

let arr = [1, 1, 1, 2, 2, 23, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9];
console.log(removeDuplicates(arr));
