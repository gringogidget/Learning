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

// Exercise #1:
// Build a function called feedPerRanger that takes in:
// - the current population of sheep.
// - the number of Park Rangers available during the day.
//		The function should alert the amount of feed that each park
//		ranger should be responsible for during the day.
// 			Output like this:
//		Each Park Ranger should load <number> lbs of feed today.



function feedPerRanger (sheepPopulation, numParkRangers) {

	var feed = (sheepPopulation *2) / numParkRangers;
	alert("Each Park Ranger should load " + feed + " lbs of feed today.")

}

// Exercise #2:
// Build a function named changePowerTotal that takes in four paramaters:
// - Total power generated (numerical)
// - Generator ID for the current generator (numerical)
// - Generator status (a string that says "on" or "off") boolean
// - The amount of power produced by the current generator (numerical)

// This function should: 
// - If the current generator is set to "on", add to the total power generated
// - Or (else) if the current generator is set to "off", remove from Total
//		Power Generated
// - Alert the technician in the following formats:

// "Generator #2 is now on, adding 62 MW, for a total of 62 MW!"
//		and for off:
// "Generator #2 is now off, removing 62 MW, for a total of 0 MW!"

function changePowerTotal (totalPower, genID, genStatus, genPower) {

	if (genStatus == "on") {
		totalPower += genPower;
		alert("Generator #" + genID + " is now " + genStatus + ", adding " + genPower + " MW, for a total of " + totalPower + " MW!");

	} else if (genStatus == "off") { 
		totalPower -= genPower;
		alert("Generator #" + genID + " is now " + genStatus + ", removing " + genPower + " MW, for a total of " + totalPower + " MW!");
	}
	return totalPower;
}






