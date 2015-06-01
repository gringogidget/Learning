// Else if checks another condition before we go to our final else statement.
// If any condition gets met in any else-if block, the rest of the loop will be 
// skipped entirely. 
// Else if can be used if many specific scenarios need attention.
// eg:

for (trainNumber = 1; trainNumber <= totalTrains; trainCount++) {
	if (trainNumber <=operationalTrains) {
		console.log("Train#" + trainNumber + " is running.");
	} else if (trainNumber === 10) {
		console.log("Train #10 begins running at noon.");
	} else {
		console.log("Train #" + trainNumber + " is not operational.");
	}
}

// Nested conditionals (lol what?)

if ( *it's a square* ) {
	if (*it's big*) {
	*make it red*

// this else only reacts to a failure of the most recent encountered if statement
// video 2.4 was at 4:41 	
} else {
	*it must be a small square, so make it blue!*
}
} else {
	*since it is not a square, it must be a circle, so make it purple!*
}
}

// Splitting results for a single condition. (pseudo code)

if (*there are any running trains*) {
	if (*the amount of running trains equals the amount of total trains*) {
		*If this is true, print out that all trains are running*
	} else {
		*just execute our existing loop code covering the status of trains*
	}
} else {
	*there must be no running trains, so print that out*
}

// // Splitting results for a single condition. (real code)

var totalTrains = 12;
var trainsOperational = 8;

if (trainsOperational > 0) {
	if (trainsOperational === totalTrains) {
		console.log("All trains are running!");
	} else {
		for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
			// already existing status conditionals go here
		}
	}
} else {
	console.log("No trains are operational today.");
}

/* Exercise Question 1: */

// Inside for loop, insert an if statement that:
// Removes half the sheep population if the number of sheep
//	rises above 10000.
// And: prints the number of sheep being removed to the console
// in the following format:
// Removing <number> sheep from the population.

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (numSheep > 10000) {
  	var SheepToRemove = numSheep / 2;
  	console.log("Removing " + numSheep + " from the population.";)
  	numSheep = numSheep - SheepToRemove;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
