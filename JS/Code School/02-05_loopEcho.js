// Complex conditionals:

&& // Binary "and" returns true if BOTH values on either side of the
	//ampersand are true.

|| // Binary "or" returns true if EITHER value is true.

//eg:

true && false // will evaluate to false bc both cannot be true.
true && true // will evaluate to true because they are both true.
false && false // will evaluate to false.

false || true // all we need is one true value to make it true. (it's true)
false || false // no truth value. False.
true || true // more than enough truth value. True.

//eg:

(11 >= 11) && (-7 < 6) // both are true, 
 						//this entire value expression is true.

(2 >= 0) && (9 < 4) // true && false
						//this entire value expression is false.

(5 < 7) || (8 > 10) // true || false
						//or statements only need one "or" to be true.

(3 > 8) || (7 < 3) // true || true // true

//Exercise #1
//If the month is a multiple of 4, find 75% of the sheep population
//Log that value to console, then remove that value from the total
	//number of sheep.
//Otherwise (else) if the population is above 10,000, find half
	//the sheep population.
//Log that value to console, then remove from the total number 
	//of sheep.
// Log format: Removing <number> sheep from the population.

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
  	var sheepToRemove = numSheep * 0.75;
  	console.log("Removing " + sheepToRemove + " sheep from the population.");
  	numSheep = numSheep - sheepToRemove;
}

  else if (numSheep > 10000) {
  	var sheepToRemove = numSheep * 0.5;
  	console.log("Removing " + sheepToRemove + " sheep from the population.");
  	numSheep = numSheep - sheepToRemove;
}

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//Exercise #2
//In one for loop, show only the even numbered turbines.
	// W a set of complex conditional statements inside the loop
	//construct a way to only turn on even numbered turbines.
	//	Generators 1 through 4 produce 62 MW.
	//	Generators 5 through 19 produce 124 MW.
	//Using the following format:
	// 	Generator #1 is off.
	// 	Generator #2 is on, adding 62 MW, for a total of 62 MW!

var totalGen = 19;
var totalMW = 0;

for(var currentGen =1; currentGen <=totalGen; currentGen ++){
  
  if (currentGen <=4 && currentGen %2 == 0) {
    var firstsGenMW = 62;
    totalMW = (totalMW + firstsGenMW);
    console.log("Generator #" + currentGen  + " is on, adding " + firstsGenMW + " MW, for a total of " + totalMW + " MW!");
  
  } else if (currentGen >=5 && currentGen %2 == 0){
    var secondGenMW = 124;
    totalMW = (totalMW + secondGenMW);
    console.log("Generator #" + currentGen  + " is on, adding " + secondGenMW + " MW, for a total of " + totalMW + " MW!");
  
  } else {
  console.log("Generator #" + currentGen  + " is off.");
  }
}
}

