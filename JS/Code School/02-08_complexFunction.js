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
	var phrase = prompt("Which phrase would you like to examine?");
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
	alert("There are " + eCount + " E's in \"" + phrase + "\".");
	return true;
}

3:00