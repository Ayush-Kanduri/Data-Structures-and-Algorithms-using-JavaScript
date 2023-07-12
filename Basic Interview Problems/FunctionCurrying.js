/**
    * @function sum
    * @description This function takes 5 parameters and returns the sum of all the parameters.
    * @param {number} a
    * @param {number} b
    * @param {number} c
    * @param {number} d
    * @param {number} e
    * @TimeComplexity O(1)
    * @SpaceComplexity O(1)
    * @returns {number} sum of all the parameters
    * @example
        console.log(sum(1)(2)(3)(4)(5));

        Output:
        15
**/

const sum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
console.log(sum(1)(2)(3)(4)(5));
