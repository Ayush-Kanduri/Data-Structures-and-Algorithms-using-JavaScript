//Maps are used in place of objects when we want to use key value pairs in an effective and efficient manner.
//Maps are used to store key value pairs. It is used for objects. It remembers the original insertion order of the keys.

let map1 = new Map([
	["name", "John"],
	["age", 30],
	["city", "New York"],
	["occupation", { Teacher: "JavaScript" }],
]); //creates a map object with the given key value pairs.

let map2 = new Map();

map2.set("name", "John"); //Set value
map2.set("age", 30);
map2.set("city", "New York");
map2.set("city", "New Delhi");
map2.set("occupation", { Teacher: "JavaScript" });

console.log(map1);
console.log(map2);

map2 = new Map(map1); // Cloning
console.log(map2);

map1.forEach((value, key) => console.log(key, value)); //Iterating

for (const [key, value] of map1) {
	console.log(key, value);
} //Iterating

console.log(map1.keys()); //Returns an iterator object that contains the keys of the map.
console.log(map1.values()); //Returns an iterator object that contains the values of the map.
console.log(map1.entries()); //Returns an entries object that contains the key value pairs.

console.log(map1.size); //Returns the size of the map

console.log(map1.has("name")); //Returns true if the map has the key

console.log(map1.get("name")); //Returns the value of the key
console.log(map1.get("age"));
console.log(map1.get("city"));
console.log(map1.get("occupation"));

map1.delete("age"); //Deletes the key value pair
map1.delete("name"); //Deletes the key value pair
console.log(map1);

map1.clear(); //Clears the map
console.log(map1);
