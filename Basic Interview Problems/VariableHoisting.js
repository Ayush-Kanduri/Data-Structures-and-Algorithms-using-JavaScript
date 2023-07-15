const globalConstVariable = "Global Const";
let globalLetVariable = "Global Let";
const constVariable = "Const";
let letVariable = "Let";
let letVariable2;
var varVariable = "Var";

const scope = () => {
	console.group();
	console.warn("Inside Function Scope");
	console.log("Global Const Variable =", globalConstVariable); // Global Const
	console.log("Global Let Variable =", globalLetVariable); // Global Let
	/** 
        * @VariableHoisting doesn't work for @CONST or @LET variables. The variables will not be hoisted to the top but are just created because of the block scope.
        * @VariableHoisting works for @VAR variables. The variable will be hoisted to the top with the value @undefined
        
        console.log(constVariable); 
        Output: ReferenceError: Cannot access 'constVariable' before initialization
        
        console.log(letVariable); 
        Output: ReferenceError: Cannot access 'letVariable' before initialization
    **/
	console.log("Var Variable (Variable Hoisting) =", varVariable); // undefined
	const constVariable = "Const1";
	let letVariable = "Let1";
	var varVariable = "Var1";
	console.log("Const Variable =", constVariable); // Const1
	console.log("Let Variable =", letVariable); // Let1
	console.log("Var Variable =", varVariable); // Var1
	console.groupEnd();
};

console.warn("Outside Function Scope");
console.log("Let Variable 2 =", letVariable2); // undefined
console.log("Const Variable =", constVariable); // Const
console.log("Let Variable =", letVariable); // Let
console.log("Var Variable =", varVariable); // Var
scope();
console.log("Const Variable =", constVariable); // Const
console.log("Let Variable =", letVariable); // Let
console.log("Var Variable =", varVariable); // Var
/** 
    * @VariableReDeclaration doesn't work for @CONST or @LET variables.
    * @VariableReDeclaration works for @VAR variables.
    
    const constVariable = "Const2";
    Output: SyntaxError: Identifier 'constVariable' has already been declared
    
    let letVariable = "Let2";
    Output: SyntaxError: Identifier 'letVariable' has already been declared
**/
var varVariable = "Var2";
console.log("Var Variable (After ReDeclaration) =", varVariable); // Var2
