/**
    * @function sumOfNumbers
    * @description This function adds all the numbers in the given array.
    * @param {Array} args - Numbers
    * @timeComplexity O(n)
    * @spaceComplexity O(1)
    * @returns {Number} - Sum of numbers
    * @example
        const sumOfNumbers = (...args) => args.reduce((acc, item) => acc + item, 0);
        console.log(sumOfNumbers(...[1, 2, 3, 4]));

        Output:
        10


    * @function sumOfNNaturalNumbers
    * @description This function adds all the natural numbers till N.
    * @param {Number} n - limit
    * @timeComplexity O(1)
    * @spaceComplexity O(1)
    * @returns {Number} - Sum of n natural numbers
    * @example
        const sumOfNNaturalNumbers = (n) => (n * (n + 1)) / 2;
        console.log(sumOfNNaturalNumbers(10));

        Output:
        55
**/

const sumOfNNaturalNumbers = (n) => (n * (n + 1)) / 2;
console.log(sumOfNNaturalNumbers(10));

const sumOfNumbers = (...args) => args.reduce((acc, item) => acc + item, 0);
console.log(sumOfNumbers(...[1, 2, 3, 4]));
