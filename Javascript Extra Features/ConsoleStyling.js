//Console Log Styling - It is a way to style the console log output. It can be done with the help of format specifiers - %c "css styling"//

let person = {
	name: "Ayush",
	age: 25,
	city: "New Delhi",
	occupation: "Web Developer",
};

console.log(
	`%c Hi!! My name is %c ${person?.name}.
%c I am %c ${person?.age} years old.
%c I am from %c ${person?.city}.
%c I am a %c ${person?.occupation}.`,
	"color: white; font-weight: 100; font-size: 15px; background-color: brown; border-radius:3px",
	"color: red; font-weight: bolder; font-size: 20px;",
	"color: white; font-weight: 100; font-size: 15px; background-color: brown; border-radius:3px",
	"color: cyan; font-weight: bolder; font-size: 20px;",
	"color: white; font-weight: 100; font-size: 15px; background-color: brown; border-radius:3px",
	"color: white; font-weight: bolder; font-size: 20px;",
	"color: white; font-weight: 100; font-size: 15px; background-color: brown; border-radius:3px",
	"color: brown; font-weight: bolder; font-size: 20px;"
);
