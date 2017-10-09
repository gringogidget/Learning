//For loops have two semicolons inside that break up the for loops paramaters

for ( *initialization* ; *condition check if loop will continue *; *do this after each loop - usually
an increment or decrement statement*) {
	*in each loop do this code*
}

eg: */

for (var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++ ) {
	console.log("Train#" + trainNumber + " is running.");
}

/* 
1) Train number will be initialized to 1 (this code never runs again)
2) TrainNumber checks the condition in the second statement. 
	Is it less than or equal to trainsOperational?
3) If it is, it will go ahead and execute the console.log code.
	(All of the code in the loop will be executed).
4) Once that code is finished it will come back to the third statement
	(trainNumber++) and will incredment the paramater, which will start
	the loop again at <= until the condition is false.

/* Using a for-loop to print in descending order:

eg: */

for (var number = 5; number > 0; number--) {
	console.log(number);
}

/* How to identify the "non operational trains" */

var trainsOperational = 8; 
var totalTrains = 12;

for (var stoppedTrain = trainsOperational +1; stoppedTrain <= totalTrains; stoppedTrain) {
	console.log("Train #" + stoppedTrain + " is not operational.");
}

/* Add it all together: */

var trainsOperational = 8; 
var totalTrains = 12;
var trainNumber = 1;

while(trainNumber <= 8){
	console.log("Train #" + trainNumber + " is running.");
	trainNumber++;
}

for (var stoppedTrain = trainsOperational +1; stoppedTrain <= totalTrains; stoppedTrain) {
	console.log("Train #" + stoppedTrain + " is not operational.");
}

/* Exercise Question 1: 
Use a for-loop to print in descending order: 
	(repeating what I did earlier ^^^)
*/

for (var number = 10; number > 0; number--) {
  console.log(number);
}

/* Exercise Question 2

Using the cute example of sheep, build a for-loop that prints
out the number of sheep that multiply each month but not more than
a year  */

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= 12; monthNumber++) {
  // in the first iteration, monthNumber here is 1;
  // in the 2nd iteration, monthNumber here is 2 ... it is
  // incremented like you said after the code below first
  // executes
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep +
    " sheep after " + monthNumber + " month(s)!");
  // in the first iteration, monthNumber here is still 1;
  // (in the 2nd iteration, monthNumber here is still 2
}

/* Exercise Question 3 

The Hoover Dam has 19 generators of multiple types. 
For simplicity, let’s say that the first 4 of these generators 
output 62 megawatts, and the other 15 output 124 megawatts. 
In hooverDam.js, the Dam Rangers have asked you to design a 
system of two loops that turns each generator on in progression, 
and prints the new total of megawatts generated.

They’d like the first loop to be a while loop handling the first 
4 generators. Then, they’d like the second loop to be a for loop 
that handles the other 15 generators. Each output line should resemble 
the following lines, with adjusted values for the currentGen and totalMW:
*/

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

// while loop handles first 4 currentGen
while (currentGen <= 4) {
  // the first four output 62 megawatts
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

// currentGen var now starts at 5 and goes up to 15, increasing by 1
for (currentGen >= 5; currentGen <= totalGen; currentGen++) {
  //totalMW increases each increment by 124
  totalMW += 124;

  //print console new info
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}

/******/


































