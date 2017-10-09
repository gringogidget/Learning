// JS can store anything in variables:
var welcome = "Welcome to the JS Express Line!"
var safetyTip = "Look both ways before crossing the tracks."

welcome + "\n" + safetyTip
// "Welcome to the JS Express Line!"
// "Look both ways before crossing the tracks."

// Variable names can also access the length property
var longString = "I wouldn't want to retype this String every time."
longString.length // will return 49 characters

// Comparing String lengths using the length property
var longWordOne = "antiestablishmentarianism"
var longWordTwo = "supercalifragilisticexpialidocious"
longWordOne.length > longWordTwo.length

// Each position in a String has a numbered "index" starting from 0
//	remember that the first character is always a zero
//		Since the index starts at zero, but the length is counted
//			by number of characters, the length value will always
// 				be one more than the last index.
var sentence = "Antidisestablishmentarianism is fun to say!"
sentence.length // answer is 43

// The charAt() method retrieves the character at a specific index
sentence.charAt(11) // answer is "b"
sentence.charAt(31) // answer is a space, or " "
sentence.charAt(42) // answer is "!"

// Variables help organize data 
// 	and create a versatile message out of flexible pieces

var trainsOperational = 8
var totalTrains = 12
var operatingStatus = " trains are operational today."
trainsOperational + " out of " + totalTrains + operatingStatus
// "8 out of 12 trains are operational today" 