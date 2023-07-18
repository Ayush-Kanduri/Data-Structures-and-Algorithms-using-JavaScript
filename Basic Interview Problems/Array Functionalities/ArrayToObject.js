/**
    * @description Converts the key value pair Array to an Object & Vice-Versa
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @example
        let arr = [
            ["a", 1],
            ["b", 2],
            ["c", 3],
            ["d", 4],
        ];
        let object = Object.fromEntries(arr);
        let array = Object.fromEntries(object);
        console.log(obj);
        console.log(array);

        Output:
        {a: 1, b: 2, c: 3, d: 4}
        [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
**/

let arr = [
	["a", 1],
	["b", 2],
	["c", 3],
	["d", 4],
];
let object = Object.fromEntries(arr);
let array = Object.entries(object);
console.log(object);
console.log(array);
