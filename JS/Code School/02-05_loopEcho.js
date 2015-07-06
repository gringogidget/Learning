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

  if (monthNumber % 4)
  	monthNumber = 


  else if (monthNumber > 10000)


  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


