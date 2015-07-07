// What is a function for?
// INPUT >> FUNCTION >> OUTPUT
// 	It solves problems and "does something" step-by-step.

// EG: Function: the sum of two cubes
//	1. Get two numbers 4 and 9
// 	2. Cube each number 4(cubed) = 64 9(cubed) = 729
// 	3. Sum the cubes: 64 + 729 = 793
//  4. Return the answer: 793

// Here's some syntax:

var a = 4;
var b = 9;

var aCubed = a*a*a;
var bCubed = b*b*b;
var sum = aCubed + bCubed;

// Functions are useful because they are reusable.
//	The function's name follows the function keyword and
//		should indicate briefly what's going on in the process.
//	Parameters are passed in a set of parentheses before the first
//		curly brace. They are the "materials" the function will
//		"work on".
//	Inside the braces, the process occurs. The funciton does
//		what it was intended to do.
//	Return keyword ends the function. It can be used anywhere in
//		the function to stop the function's work.

function sumOfCubes (a, b) {
//	*do some stuff*
return //something (or nothing) from the process
}

// Let's assign some steps to a function syntax:

function sumOfCubes (a, b) {

	var aCubed = a*a*a;
	var bCubed = b*b*b;
	var sum = aCubed + bCubed;

	return sum;
}

// Writing efficient functions 
//	Because being consise conserves memory and limits storage ops.

function sumOfCubes (a, b) {

	var aCubed = a*a*a;
	var bCubed = b*b*b;
//	var sum = aCubed + bCubed;
// 		you can eliminate this with the following below:

	return aCubed + bCubed;
}

// Even shorter:

function sumOfCubes (a, b) {
	return a*a*a + b*b*b;
}

// Parameters can also be expressions, which the function will
//	solve before starting:

function sumOfCubes (1+2, 3+5);

// Variables can also be used as parameters:

var x = 3;
function sumOfCubes(x*2, x*4);

// Exercise #1:
// Build a function declaration called multiplyTrio that takes
//	in three parameters. 
// Inside the function, multiply the numbers together into 
//	one product, and return the result. 

function multiplyTrio (a, b, c) {

	var aCubed = a*b*c;

	return aCubed;
}

// Exercise #2:
// Call your multiplyTrio function from the console using
//	the numbers 8, 4, 10. 

multiplyTrio(4, 8, 10);

// Excercise #3:
// Build a function declaration called maxOf2 that takes in 
//	two numbers and returns the greater value.
// Be careful to think about the possibility of equality as wel,
//	and return one of the numbers.

function maxOf2 (a, b) {

	if (a >= b) {
		return a;
	} else {
		return b;
	}
}

// Exercise #3:
// Refractor the following code to include only one line that
//	returns a value.

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}

////// Refractored:

function mystery(x, y) {

	return (4 * x * y) + (3 * y * 5);;
}