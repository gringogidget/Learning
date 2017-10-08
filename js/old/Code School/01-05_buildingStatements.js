// You have to add a semicolon to the compiler to tell it you're done.
// eg:
var trainsOperational = 8;

// The console.log method output results for you.
var trainsOperational = 8;
var totalTrains = 12;
console.log("There are " + trainsOperational + " running trains.");

// You can also return the result of an expression:
console.log(trainsOperational == totalTrains); // will output truey/falsey

// Exercise 1:
// Build a variable for daily-average eruption height called 
// 	avgHeight and set it to 145 feet.
// 		Build a variable for today’s number of eruptions 
//			called numEruptions and set it to 4 eruptions.
var avgHeight = 145;
var numEruptions = 4;

// Exercise 2:
// Write a single statement 
// that prints the following string to the browser console 
// using string concatenation and the existing variables to 
// produce the correct format:

// "Old Faithful" at Yellowstone National Park
// Average eruption height today: 145
// Number of eruptions: 4

var avgHeight = 145;
var numEruptions = 4;

console.log("\"Old Faithful\" at Yellowstone National Park\nAverage eruption height today: " + avgHeight +
"\nNumber of eruptions: " + numEruptions);

/* Now, let’s say that Old Faithful’s eruptions are kept as separate 
variables.
Print the message below to the console using the existing variable 
names to access all values in the printout. Additionally, use one 
console.log() statement per line of the output.

We’ve also given you a variable name for the average; but to succeed 
at this challenge, you’ll need to think of how to calculate the 
average using only the variable names and operation syntax.

< and > indicate where our variable’s actual value should be placed. 
There should be no < > in your output, however. Be attentive to spacing 
as well.

"Old Faithful" at Yellowstone National Park
Eruption 1: <first eruption amount goes here>
Eruption 2: <second eruption amount goes here>
Eruption 3: <third eruption amount goes here>
Average eruption height today: <average value goes here>

*/

var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg = (eruption1 + eruption2 + eruption3) / numEruptions;

console.log("\"Old Faithful\" at Yellowstone National Park");
console.log("Eruption 1: " + eruption1);
console.log("Eruption 2: " + eruption2);
console.log("Eruption 3: " + eruption3);
console.log("Average eruption height today: " + avg);










