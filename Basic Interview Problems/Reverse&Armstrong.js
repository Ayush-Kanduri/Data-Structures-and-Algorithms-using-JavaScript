/**
    * @function reverse
    * @description This function reverses the given number
    * @param {number} num - The number to be reversed
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {number} - The reversed number
    * @example
        let num = 1234;
        console.log(reverse(num));

        Output:
        4321    
**/

const reverse = (num) => parseInt(num.toString().split("").reverse().join(""));
let num = 1234;
console.log(reverse(num));
