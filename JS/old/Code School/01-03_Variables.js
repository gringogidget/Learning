// JS uses variables to store and manage data:
// variable keyword, variable name, assignment operator, stored variable
var trainWhistles = 3

// When the variable is called, you get its value:
trainWhistles -> 3

// Variable naming rules:
var no spaces //no spaces allowed
var 3blindmice //no digits in front
var scored_is_fine // underscores are fine but irritating
var get$ //cool, but don't
var $_$ //this works, but don't be an idiot.
var goodNameHere //camel case rules!
var mortalKombat2 // yeah whatever, FATALITY. works

//Changing variable contents
var trainWhistles = 3
trainWhistles // it's now 3
var trainWhistles = 9
trainWhistles // it's now 9
var trainWhistles = trainWhistles + 3 // now equals 12

// += directly adds to the variable
trainWhistles += 3 // now equals 15

// The trainWhistles variable is being multiplied by two 
// before being stored back into the variable. 
trainWhistles = trainWhistles * 2 // now equals 30
trainWhistles *= 2 // now equals 60

// Variable names also act as a substitute for the data they point to
trainWhistles = 3
"All of our trains have " + trainWhistles + " whistles!"
// "All of our trains have 3 whistles"

"But the Pollack 9000 has " + (trainWhistles * 3) + "!"
// "But the Pollack 9000 has 9!"

// make pollack9000 a variable
var pollack9000 = trainWhistles * 3

// A simple syntax for increasing or decreasing a variable's value by 1
// (incrementing and decrementing)
var trainWhistles = 3
trainWhistles++ // the trainWhistles value is now 4

var trainWhistles = 3
trainWhistles-- // the trainWhistles value is now 2












