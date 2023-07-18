/**
    * @function deleteFromEnd1
    * @description - Deletes the ELEMENT from the END of the array using Array Pop
    * @param {Array} arr - Array
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Delete from the End (Array Pop): ", deleteFromEnd1(arr));
        
        Output: 
        Delete from the End (Array Pop):  (4) [1, 2, 3, 4]


	* @function deleteFromEnd2
    * @description - Deletes the ELEMENT from the END of the array using Array Length
    * @param {Array} arr - Array
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Delete from the End (Array Length): ", deleteFromEnd2(arr));
        
        Output: 
        Delete from the End (Array Length):  (4) [1, 2, 3, 4]


	* @function deleteFromStart
    * @description - Deletes the ELEMENT from the START of the array using Array Shift
    * @param {Array} arr - Array
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Delete from the Start (Shift): ", deleteFromStart(arr));
        
        Output: 
        Delete from the Start (Shift):  (4) [2, 3, 4, 5]


	* @function deleteFromIndex
    * @description - Deletes the ELEMENT from the given INDEX of the array using Array Splice
    * @param {Array} arr - Array
    * @param {Number} index
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Delete from the Index 2 (Splice): ", deleteFromIndex(arr, index));
        
        Output: 
        Delete from the Index = 2 (Splice):  (4) [1, 2, 4, 5]


	* @function deleteUsingValue
    * @description - Deletes the given VALUE/ELEMENT from the array using Array Filter
    * @param {Array} arr - Array
    * @param {Number} VALUE
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Delete the Value 3 (Filter): ", deleteUsingValue(arr, VALUE));
        
        Output: 
        Delete the Value = 3 (Filter):  (4) [1, 2, 4, 5]


	* @function insertAtStart
    * @description - Inserts the ELEMENT at the START of the array using Array Unshift
    * @param {Array} arr - Array
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Insert at the Start (Unshift): ", insertAtStart(arr));
        
        Output: 
        Insert at the Start (Unshift):  (6) [0, 1, 2, 3, 4, 5]


	* @function insertAtIndex
    * @description - Inserts the given VALUE/ELEMENT at the given INDEX using Array Splice
    * @param {Array} arr - Array
    * @param {Number} index
    * @param {Number} value
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Insert at the Index 2 (Splice): ", insertAtIndex(arr, index, value));
        
        Output: 
        Insert at the Index = 2 (Splice):  (6) [1, 2, 'X', 3, 4, 5]


	* @function replaceFromIndex
    * @description - Replaces the given VALUE/ELEMENT from the given INDEX using Array Splice
    * @param {Array} arr - Array
    * @param {Number} index
    * @param {Number} value
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Replace from Index 2 (Splice): ", replaceFromIndex(arr, index, value));
        
        Output: 
        Replace from Index = 2 (Splice):  (5) [1, 2, 'X', 4, 5]


	* @function insertAtEnd
    * @description - Inserts the given VALUE/ELEMENT at the END of the array using Array Push
    * @param {Array} arr - Array
    * @param {Number} VALUE
    * @returns {Array} - Updated Array
    * @example
        let index = 2;
		let value = "X";
		let VALUE = 3;
		let arr = [1, 2, 3, 4, 5];
		console.log("Insert the Value = 3 at the End (Array Push): ", insertAtEnd(arr, VALUE));
        
        Output: 
        Insert the Value = 3 at the End (Array Push):  (6) [1, 2, 3, 4, 5, 3]
**/

const deleteFromEnd1 = (arr) => {
	let newArr = [...arr];
	newArr.pop();
	return newArr;
};

const deleteFromEnd2 = (arr) => {
	let newArr = [...arr];
	newArr.length = newArr.length - 1;
	return newArr;
};

const deleteFromStart = (arr) => {
	let newArr = [...arr];
	newArr.shift(9);
	return newArr;
};

const deleteFromIndex = (arr, index) => {
	let newArr = [...arr];
	newArr.splice(index, 1);
	return newArr;
};

const deleteUsingValue = (arr, value) => {
	let newArr = [...arr];
	let res = [];
	res = newArr.filter((item) => item !== value);
	return res;
};

const insertAtStart = (arr) => {
	let newArr = [...arr];
	newArr.unshift(0);
	return newArr;
};

const insertAtEnd = (arr, value) => {
	let newArr = [...arr];
	newArr.push(value);
	return newArr;
};

const insertAtIndex = (arr, index, value) => {
	let newArr = [...arr];
	newArr.splice(index, 0, value);
	return newArr;
};

const replaceFromIndex = (arr, index, value) => {
	let newArr = [...arr];
	newArr.splice(index, 1, value);
	return newArr;
};

let index = 2;
let value = "X";
let VALUE = 3;
let arr = [1, 2, 3, 4, 5];
console.log("Delete from the End (Array Pop): ", deleteFromEnd1(arr));
console.log("Delete from the End (Array Length): ", deleteFromEnd2(arr));
console.log("Delete from the Start (Shift): ", deleteFromStart(arr));
console.log("Delete from the Index = 2 (Splice): ", deleteFromIndex(arr, index));
console.log("Delete the Value = 3 (Filter): ", deleteUsingValue(arr, VALUE));
console.log("Insert at the Start (Unshift): ", insertAtStart(arr));
console.log(
	"Insert the Value = 3 at the End (Array Push): ",
	insertAtEnd(arr, VALUE)
);
console.log("Insert at the Index = 2 (Splice): ", insertAtIndex(arr, index, value));
console.log(
	"Replace from Index = 2 (Splice): ",
	replaceFromIndex(arr, index, value)
);
