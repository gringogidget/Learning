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

// Exercise #1:
// In the following array, set one value of the array so it will list in order:
var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];

// Answer:
var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
list[3] = 4;
console.log(list);

// Exercise #2:
// Using the specific array function that adds data to the back end of the
//	array, add the next number to your newly corrected list:

var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
list.push(10);
console.log(list);

// Exercise #3:
// Create an array called values that contains the following contents in order:
//	a string, a number, a boolean:

var values = ["Alphabet, tango, delta", 69, true];

// Exercise #4:
//	Remove the last cell from the values variable and store the result in a
//		variable called bool

var values = ["Alphabet, tango, delta", 69, true];
var bool = values.pop();

// Exercise #5:
// In the following setup, enter a line of code that declares a variable 
// called infant and uses the array eightiesMovies to access the word "Baby".

var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];


//Answer:
var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];
var infant = eightiesMovies[1][4];

// Exercise #6:
// 	Alert a string with the full title of the first movie in the 
//		eightiesMovies array, but only using the eightiesMovies variable
//		to access the correct values
// Use the concatenation operator to unite the words into one string,
//		and remember to be attentive to necessary whitespace.

var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];
alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1]);




