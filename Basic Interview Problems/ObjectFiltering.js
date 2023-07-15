/**
    * @function filter
    * @description This function filters out null undefined values from the object using Object(fromEntries & entries)
    * @param {Object} obj
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {Object} - Filtered Object
    * @example
        const obj = {
            name: "Raj",
            age: 20,
            city: null,
            country: undefined,
        };
        console.log(filter(obj));

        Output:
        {name: 'Raj', age: 20}


    * @function filter2
    * @description This function filters out null undefined values from the object using Nullish coalescing operator
    * @param {Object} obj
    * @timeComplexity O(n)
    * @spaceComplexity O(n)
    * @returns {Object} - Filtered Object
    * @example
        const obj = {
            name: "Raj",
            age: 20,
            city: null,
            country: undefined,
        };
        console.log(filter2(obj));

        Output:
        {name: 'Raj', age: 20}
**/

const filter = (obj) =>
	Object.fromEntries(Object.entries(obj).filter(([_, val]) => val != null));

const filter2 = (obj) => {
	let res = {};
	for (let key in obj) (obj[key] ?? "X") !== "X" ? (res[key] = obj[key]) : "";
	return res;
};

const obj = {
	name: "Raj",
	age: 20,
	city: null,
	country: undefined,
};
console.log(filter(obj));
console.log(filter2(obj));
