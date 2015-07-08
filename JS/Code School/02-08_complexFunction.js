// Design a function that counts "e's" in a user-entered phrase

function countE () {	//sometimes functions dont have parameters
// Ask user for a phrase to check
// If the entry is invalid
//		Alert the user
//		Exit function with a failure report (via return keyword)
} /* Otherwise */{
// If the entry is valid, start counting the "e's" in
//	the user's phrase.
//		Make a counter variable for the "e's"
/*		Make a for loop for each character in the user's entry*/{
/*			If the character is an "E" or an 'e'*/{
//			Increment the E counter
	}

}
//	Alert the amount of E's in the phrase and return success 
	}
//}


function countE () {
	var phrase = prompt("Which phrase would you like to examine?"); // popup text field
	if ( typeof(phrase) != "string" ) {
		alert("That's not a valid entry!");
		return false; //instantly exits function
	
	} else {
		var eCount = 0;
		for (var index = 0; index < phrase.length; index++) {
			if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
				eCount++;
		}
	}
	alert("There are " + eCount + " E's in \"" + phrase + "\"."); // pops up "there are _ e's"
	return true;
}

// Local and Global Scope:

var x = 6;		// This scope is "global", vars declared are potentially accessable
var y = 4;		// from everywhere.

function add (a, b){ 	// Inside functions, the scope is "local".
	var x = a + b;		// Stuff that happens here, stays here.
	return x;
}

function subtract (a, b){
	y = a - b;
	return y;
}


// Functions create a new scope
//	Variables declared in a function stay in the function

var x = 6
function add (a, b){	//add (9, 2) = 11
	var x = a + b;
	return x;			//console.log(x)
}						// answer will be 6, because it is not a part of the function.


// Try again:

var x = 6				//add (9, 2) = 11
function add (a, b){
	x = a + b;			//console.log(x)
	return x;			//answer is 11 because no new var is created
}













