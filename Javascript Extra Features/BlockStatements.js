//Block statements are used to group code together. They create a scope for itself only.

let i = 0;
let j = 10;
console.log("Before Block ", i, j);
{
	let i = 10;
	j = 0;
	console.log("Inside Block ", i, j);
}
console.log("After Block ", i, j);

switch (i) {
	case 0: {
		const i = 10;
		console.log("Inside Switch ", i);
		break;
	}
	case 1: {
		const i = 20;
		console.log("Inside Switch ", i);
		break;
	}
	default: {
		const i = 30;
		console.log("Inside Switch ", i);
		break;
	}
}
console.log("After Switch ", i);
