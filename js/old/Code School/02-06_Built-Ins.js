// Built in functions you can use at any time to get and send information.

alert("Hi, Hello.") // sends message to user in small pop-up window

confirm("r u sure?") //asks user for consent to move forward w an option
 			// if user hits "ok" function returns true. "cancel" false.

prompt("What's ur name?") // sends a message to the user and retrieves 
						  // an entry

// prompt can store the variable:
	var userName = prompt("What's ur name?");
// and confirm if this is correct:
	confirm("Are you sure ur name is " + userName + "?");

// The typeof operator identifies the type of value inside 
	//a variable or expression.
	//This is useful in checking a variable's contents.

typeof true // returns "boolean"
typeof "that's not a valid entry" // returns "string"
typeof 42 // returns "number"
typeof undefined // returns "undefined"
typeof null // returns "object"

// A simple name entry system for a train service:

/* Pseudo code:
...
"make a confirmation flag"
"until the user has confirmed a name, do this:{
	*request the name using the prompt()*
	*if the user says OK at confirm(){
		*acknowledge accepted entry*
		*adjust flag to exit the loop*
	}

	*otherwise, cycle back to the top*
} */

var gotName = false;
while (gotName == false){
	var userName = prompt("what's ur name?");
	if ( confirm("Are you sure ur name is " + userName + "")){
		alert("'Sup " + userName + "!");
		gotName = true;
	}
}

// Exercise #1:
// Without using console, tell the user to use a pop-up window
// 	that displays whether or not the park is open.


var parkIsOpen = false;

if (parkIsOpen) {
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}

// Exercise #2:
// Ask the user for their age with a pop-up window function and
// 	store the user's response in a var called userAge.
//	use the following question: "What's your age, user?"

var userAge = prompt("What's your age, user?");

// Exercise #3:
// With var userAge, use a pop-up window to confirm the user entry
//	with the following message: "You entered <age> is that correct?"
//	Then, store the result of the confirmation in var ageIsCorrect.
//	(Don't use any loops or conditionals).


var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + " is that correct?");

// Exercise #4: 
// Create a while loop that will continue to execute as long as
//	the user has not entered the correct age.
// Inside the loop, provide a confirmation that the age has been 
//	entered correctly:
//	"You entered <age>. Is this correct?"
// If the statement is correct, set var ageIsCorrect to true and 
//	alert the following message:
// 	" Great! Your age is logged as <age>."
// Otherwise, the loop should prompt the user to enter their age
//	and assign to var userAge.
// 	"What's your age, user?"

var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while (ageIsCorrect == false) {
  if (confirm("You entered " + userAge + ". Is this correct?")) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  } else {
    userAge = prompt("What's your age, user?");
  }
}





