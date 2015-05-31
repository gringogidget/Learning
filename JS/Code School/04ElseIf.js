// Else if checks another condition before we go to our final else statement.
// If any condition gets met in any else-if block, the rest of the loop will be 
// skipped entirely. 
// Else if can be used if when many specific scenarios need attention.
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
	*since it's not a squre, it must be a circle, so make it purple!*
}