//Loop Labels - Used with continue or break. continues to the particular loop or breaks out of a particular loop. Used as a label for the loop to point towards//

//Loop 1
loop1: for (let i = 0; i <= 5; i++) {
	if (i === 1) continue loop1;
	if (i === 4) break loop1;
	//Loop 2
	loop2: for (let j = i; j <= 5; j++) {
		if (j === 2) continue loop1;
		if (j === 3) break loop2;
		console.log(i, j);
	}
}

//Scope Labels - Used inside a scope to break out of the scope//
//A Scope is a block of code that is contained within curly braces. This scope has a label 'scopeLabel'

scopeLabel: {
	console.log("Inner 1");
	break scopeLabel;
	console.log("Inner 2");
}
console.log("Outer 1");
