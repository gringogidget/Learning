/* How to we run different lines of code based on specific conditions? */
// Basic shell of if / else statement:

if ( *some condition is true*) {
	*do this code*
} else {
	*otherwise, do this code instead *
}

// A basic example of a conditional execution:

var value1 = 4;
var value2 = 9;

if (value1 < value2) {
	console.log(value1 + " is less than " + value2);
} else {
//We aren't sure if it's greater than or less than:
	console.log(value1 + " is greater than or equal to " + value2);
}


/* Exercise Question 1: 
Print numbers in descending order that are even */

//number starts at 10
var num = 10;

//The number won't go below zero
while (num > 0) {

//if the is divisible by 2
 if (num % 2 == 0) {

//print the number
	console.log(num);

//otherwise, decrement and re-run the loop
  num--;
}

/* Exercise Question 2: 
Print a message to let people know if a/the park is open or closed */

var parkIsOpen = true;

if (parkIsOpen){
	console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
	console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}










