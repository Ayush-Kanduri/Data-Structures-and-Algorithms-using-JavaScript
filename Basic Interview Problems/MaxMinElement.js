/**
    * @function max
    * @description - Finds the maximum number from the array
    * @param {Array} arr - An array of numbers
    * @TimeComplexity - O(1)
    * @SpaceComplexity - O(1)
    * @returns {Object} - Maximum number
    * @example
        console.log("Max =", max([12, 3, 5, 1, 89, 6]));
        
        Output: 
        89


    * @function min
    * @description - Finds the minimum number from the array
    * @param {Array} arr - An array of numbers
    * @TimeComplexity - O(1)
    * @SpaceComplexity - O(1)
    * @returns {Object} - Minimum number
    * @example
        console.log("Min =", min([12, 3, 5, 1, 89, 6]));
        
        Output: 
        1
**/

const max = (arr) => Math.max(...arr);
const min = (arr) => Math.min(...arr);

console.log("Max =", max([12, 3, 5, 1, 89, 6]));
console.log("Min =", min([12, 3, 5, 1, 89, 6]));
