// Loops help move through indicies of an array:

var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11 ];

for (var i = 0; i < numberList.length; i++) {

console.log("The value in cell " + i + " is " + numberList[i]);
	// the loop counter can also serve as a current index position,
	//	helping iterate over the entire contents of the array in order

}


// Using the undefined value to create "empty" cells

var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11 ];
numberList[5] = undefined; // 12 is "erased" or undefined/empty


// Counting even numbers and erasing the odd's:

var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11 ];

var evenCount = 0; 
for (var i = 0; i < numberList.length; i++) {
	if (numberList[i] % == 0) {
		evenCount++;
	} else {
		numberList[i] = undefined;
	}
console.log(evenCount); // answer is 5
}


// Combining arrays and functions to keep track of data

function addPassenger (name, list) {
	if (list.length == 0) {
		list.push(name);
	} else {
		for (var i = 0; i < list.length; i++) {
			if(list[i] == undefined) {
				list[i] = name;
				return list;
			} else if (i == list.length - 1) {
				list.push(name);
				return list;
			}
		}
	}
}


// Making a new list and adding data to it:

var passengerList = [];
passengerList = addPassenger("Shitbird Pooface", passengerList);
passengerList = addPassenger("Fuck Tard", passengerList);
passengerList = addPassenger("Glenn Danzig", passengerList);
	// ["Shitbird Pooface", "Fuck Tard", "Glenn Danzig"]


// Delete these people function:

function deletePassenger (name, list) {
	if (list.length ==0) {
		console.log("List is empty!");
	} else {
		for (var i = 0; i < list.length; i++) {
			if(list[i] == name) {
				list[i] = undefined;
				return list;
			} else if (i == list.length - 1) {
				console.log("Passenger not found");

			}

		}
	}
	return list; // good practise to return whether modified or not
}


// Take data out and put some more back in

passengerList = ["Shitbird Fuckface", "Fuck Tard", "Glenn Danzig"];
passengerList = deletePassenger("Fuck Tard", passengerList);
// returns: ["Shitbird Fuckface", undefined, "Glenn Danzig"]

passengerList = addPassenger("Henry Rollins", passengerList);
// returns: ["Shitbird Fuckface", Henry Rollins, "Glenn Danzig"]


// Exercise #1:

// Design a function named numStrings using a for loop that counts all the strings
//	in the array parameter called list.

// Inside the funciton, set up a variable to initialize it to a value of 0.
//		(we use this variable to keep track of the number of strings).

// Use a for loop to loop through the list array.
// If the typeof current array index value is equal to "string", increment 
//		the count variable.

// Out side the foor loop, return the count variable with teh total amount
//		of strings found.

function numStrings(list) {
  var stringCount = 0;
  for (var i = 0; i <= list.length; i++) {
    if (typeof(list[i]) == "string") {
      stringCount++;
    }
  }
  return stringCount;
}







