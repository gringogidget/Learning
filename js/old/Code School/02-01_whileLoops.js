// The while-loop runs its code as long as its boolean
// expression is true.
//	While it's true the code will execute.

while(true){
	*do this code!*
}

/*On the other hand, a false statement would not run _at all_: */

while(false){
	*do this code!*
}

/* Make a while loop that prints the numbers 1-5 in ascending order
1) establish a variable that starts at 1
2) as long as the number is equal to or less than 5, print the number with console.log
3) increase the numbers value by 1
4) when the number is greater than 5, it will stop the loop */

var number = 1;
while (number <= 5) {
	console.log(number);
	number++;
}

/* Loops allows code to execute repeatedly without extra typing. 
The following will print true for trains up to number 8. */

eg:

var trainNumber = 1;
while(trainNumber <= 8){
	console.log("Train #" + trainNumber + " is running.");
	trainNumber++;
}

/* Always use variables and not hard-coded values. 
(Eg, if 10 trains are running and not 8, you don't want to change 
the hard coded number every time).

As long as var TrainsOperational has the correct number, 
you'll get the correct amount of "trains" available.

eg: */

var trainsOperational = 8;
var tranNumber = 1;
while ( trainNumber <= trainsOperational ){
	console.log("Train#" + trainNumber + " is running.");
	trainNumber++;
}

/* Exercise Question 1 

Write a basic while loop that will print to console
the numbers 10 - 1 in descending order */

var num = 10; // the variable is set to 10

while (num > 1) { // when the number is greater than 1
  console.log(num); // print the num
  num--; // decrease number by one
}

/* Exercise Question 2

Using the cute example of sheep, build a while loop that prints
out the number of sheep that multiply each month but not more than
a year */

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while ( monthNumber <= monthsToPrint ){
  numSheep = numSheep *4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}





