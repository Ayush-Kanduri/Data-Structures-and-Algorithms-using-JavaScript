//Promise.any - returns the first resolved promise out of an array of promises. Wait for all but abort on first success.
//promise.all - wait for all but abort on any failure.
//promise.race - wait for all but abort on first success or failure.
//promise.allSettled - wait for all

//Throws error if all rejected

let url = "https://api.github.com/users/";

Promise.any([
	fetch(`${url}ayush-kanduri`),
	fetch(`${url}ayush`),
	fetch(`${url}defunkt`),
])
	.then((response) => {
		return response.json();
	})
	.then(({ name }) => {
		console.log(name);
	})
	.catch((error) => {
		console.log(error);
	});
