const compareArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	const map = new Map();
	for (const item of arr1) {
		if (map.has(item)) map.set(item, map.get(item) + 1);
		else map.set(item, 1);
	}
	for (const item of arr2) {
		if (!map.has(item)) return false;
		map.set(item, map.get(item) - 1);
		if (map.get(item) === 0) map.delete(item);
	}
	return map.size === 0;
};

let arr1 = [5, 4, 8, 10, 9];
let arr2 = [5, 10, 8, 9, 4];
console.log(compareArrays(arr1, arr2));
