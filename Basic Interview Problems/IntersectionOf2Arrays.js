/**
    * @function intersection
    * @description - This function takes two arrays as input and returns the intersection of those two arrays.
    Then we have used Set to remove duplicate elements from the result array. Finally we
    have used spread operator to convert the Set to an array.
    The output will be an Array containing only common unique values between both Arrays.
    * @param {Array} arr - An array
    * @param {Array} a - An array
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(n)
    * @returns {Array} - An array
    * @example
        let arr = [4, 5, 9, 4, 5, 34, 56, 78];
        let a = [4, 5, 6, 7, 9, 9, 5, 4];
        const intersectionArray = intersection(arr, a);
        console.log([...new Set(intersectionArray)]);

        Output: 
        [4, 5, 9]
**/

const intersection = (arr, a) => arr.filter((item) => a.includes(item));

let arr = [4, 5, 9, 4, 5, 34, 56, 78];
let a = [4, 5, 6, 7, 9, 9, 5, 4];
const intersectionArray = intersection(arr, a);
console.log([...new Set(intersectionArray)]);
