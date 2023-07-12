/**
    * @function vowelOrNot
    * @description - Checks if the given character is a vowel or not
    * @param {String} X - A character
    * @TimeComplexity - O(1)
    * @SpaceComplexity - O(1)
    * @returns {String} - Vowel or Consonant
    * @example
        let X = "B";
        console.log(vowelOrNot(X));

        Output: Consonant
**/

const vowelOrNot = (X) => {
	X = X.toLowerCase();
	if (X == "a" || X == "e" || X == "i" || X == "o" || X == "u") return "Vowel";
	return "Consonant";
};

let X = "A";
console.log(vowelOrNot(X));
