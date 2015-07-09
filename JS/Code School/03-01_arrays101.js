// An array is a data structure with automatically indexed positions 
// 	Just like strings, an array's positioning begins with a zero. 
// 		To build an array:

var passengers = [ "Kitty Cat", "Mighty Mouse", "Elvis Elephant"
					"Rebecca Rhino", "Polly Parrot", "Ashley Asparagus"];
					// brackets indicate to compiler to make an array

// To access any particular index's value (this case, Ashley).
passengers[5];


// It's possible to reference and change specific cells and indices:
passengers[2] = "Lardy Ladybug";

// Like strings, you can access the length of an array:
passengers.length; 		// returns a value of six because there are six cells

// The pop() function deletes the last position and retrieves its value:
passengers.pop();		// automatically "pop"s the last existing cell and 
						// 	returns its contents. The array has one less cell.

// The push() function adds a cell to the last position and enters a value:
passengers.push("Froggy Fucktard");
						// Adds Froggy Fucktard to the end of the cells where
						// 	Ashley Asparagus was.

// Arrays can hold values, variables, other arrays and combos of them all
var poisson = "fish";
var comboArray2 = ["Red", poisson, "Blue", poisson];
						//poison gets replaced with "fish"

var arrayOfArrays = ["comboArray1, comboArray2"];
	// becomes
["One", "fish", 2, "fish"], ["Red", "fish", "Blue", "fish"]
	// the variable name disappears in the new array

console.log(arrayOfArrays)
	// will return [Array[4], Array[4] ]
	// returns lengths of arrays (which happen to be the same)

var arrayOfArrays = ["comboArray1, comboArray2"];
console.log(arrayOfArrays[1]);
	// retrieves:
["Red", "fish", "Blue", "fish"]
	// because the arrays start from zero and it's the second position (1)
	// This is called a two-dimensional array because we have the cell of 
	//		the largest array (arrayOfArrays) and we have the cells of the 
	//		internal arrays as well

//Eg 1:
var arrayOfArrays = ["comboArray1, comboArray2"];
["One", "fish", 2, "fish"], ["Red", "fish", "Blue", "fish"]
console.log(arrayOfArrays[1][2]);
	// [1] = comboArray2 (0, 1)
	// [2] = "Blue" (0, 1, 2)

//Eg 2:
var arrayOfArrays = ["comboArray1, comboArray2"];
["One", "fish", 2, "fish"], ["Red", "fish", "Blue", "fish"]
console.log(arrayOfArrays[0][1]);
	// [0] = comboArray1
	// [1] = "fish"




