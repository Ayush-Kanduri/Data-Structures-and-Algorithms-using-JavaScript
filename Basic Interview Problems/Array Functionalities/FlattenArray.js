/**
    * @function flattenArray
    * @description - Flattens a multi-dimensional array into a single array
    * @param {Array} arr - A multi-dimensional array
    * @param {Number} depth - The depth of the array (Infinity by default)
    * @TimeComplexity - O(n)
    * @SpaceComplexity - O(1)
    * @returns {Array} - A single array
    * @example
        const arr = [
                    1,
                    2,
                    3,
                    [4, 5, 6],
                    [7, 8, [9, 10]],
                    [11, 12, [13, 14, [15, 16]]],
                    [17, 18, [19, 20, [21, 22, [23, 24]]]],
                    [25, 26],
                ];
                console.log(flattenArray(arr, 0));
                console.log(flattenArray(arr, 1));
                console.log(flattenArray(arr, 2));
                console.log(flattenArray(arr, 3));
                console.log(flattenArray(arr, 4));
                console.log(flattenArray(arr));

        Output:
            [
                1, 2, 3, 4, 5, 6, 7, 8, 
                [9, 10], 
                11, 12, 
                [13, 14, [15, 16]], 
                17, 18, 
                [19, 20, [21, 22, [23, 24]]], 
                25, 26,
            ];

            [
                1, 2, 3, 4, 5, 6, 7, 8, 
                [9, 10], 
                11, 12, 
                [13, 14, [15, 16]], 
                17, 18, 
                [19, 20, [21, 22, [23, 24]]], 
                25, 26,
            ]; 

            [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
                [15, 16], 
                17, 18, 19, 20, 
                [21, 22, [23, 24]], 
                25, 26,
            ];

            [
                1, 2, 3, 4, 5, 6, 7, 8, 
                9, 10, 11, 12, 13, 14, 15, 
                16, 17, 18, 19, 20, 21, 22, 
                [23, 24], 
                25, 26,
            ];

            [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                11, 12, 13, 14, 15, 16, 17, 18, 
                19, 20, 21, 22, 23, 24, 25, 26,
            ];

            [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                11, 12, 13, 14, 15, 16, 17, 18, 
                19, 20, 21, 22, 23, 24, 25, 26,
            ]; 
**/

function flattenArray(arr, depth = Infinity) {
	return depth === 0 ? arr.flat() : arr.flat(depth);
}

const arr = [
	1,
	2,
	3,
	[4, 5, 6],
	[7, 8, [9, 10]],
	[11, 12, [13, 14, [15, 16]]],
	[17, 18, [19, 20, [21, 22, [23, 24]]]],
	[25, 26],
];
console.log(flattenArray(arr, 0));
console.log(flattenArray(arr, 1));
console.log(flattenArray(arr, 2));
console.log(flattenArray(arr, 3));
console.log(flattenArray(arr, 4));
console.log(flattenArray(arr));
