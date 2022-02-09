//Template literal functions are used with backticks `` and are used with a function name which takes that string as input without variables, & variables array.

//string - string array to be printed without variables - ['Hello ',' you are ',' years old']
//variables - variables array to be printed with variables - ['Ayush',25]
// ...variables - Ayush 25

// templateLiteralFunction = (string, name, age) => {
// 	return `User Logged In ...\n${string[0].trim()} ${name} ${string[1].trim()} ${age} ${string[2].trim()}`;
// };

templateLiteralFunction = (string, ...variables) => {
	let i = 0;
	let j = 0;
	return `User Logged In ...\n${string[i++].trim()} ${variables[j++]} ${string[
		i++
	].trim()} ${variables[j++]} ${string[i++].trim()}`;
};

const name = "Ayush";
const age = 25;
console.log(templateLiteralFunction`Hello ${name} you are ${age} years old`);
