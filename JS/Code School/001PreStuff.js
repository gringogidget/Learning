/* How JavaScript stores and processes flat text:
When JS sees quotation marks, it sees it as a string
and returns it back to you (strings need quotes). */
"Raindrops On Roses"
"Whispers On Kittens"

/* You can use the "+" for using concatenation. This 
will "glue the strings" together */
"Raindrops On Roses" + " And " + "Whiskers On Kittens"

/* This works with numbers and expressions, too. Make sure
to add the appropriate spacing so the outpot is correct */
"The meaning of life is " + 42

/* Concatenation works with numbers and their expressions,
however expressions will be evaluated by the console */
"Platform " + 9 + " and 3/4"

/* Some characters need backslash notation in strings 
(tab stops) */
"Flight #:\t921\t\tSeat;\t21C"

// \"INFO\"" will print a quotation character:
"Login Password:\t\t\"C3P0R2D2\""

// If you want to produce a backslash, you have to add two \\: 
"Origin\\Destination:\tOrlando(MCO)\\London(LHR)"

// To make a new line (\n) :
"Departure:\t09:55A\nArrival:\t14:55P"

// Check for matching strings and alphabetical ordering: 
"The Wright Brothers" == "The Wright Brothers" //true
"The Wright Brothers" == "Super Mario Brothers" //false
"The Wright Brothers" != "the wright brothers" 
								//true, it does not equal (case counts)

/* The length of strings can be accessed with the .length property
which counts spaces and non-alphabetic characters, too */
"antidisestablishmentarianism".length // -> 28
"One fish, two fish, red fish, blue fish".length // -> 39

//Exercise 01: 
// Concatenate the digits 856237 into a new string where:
// all even digits stay as regular numbers.
// all values in the final string are separated by spaces.

"eight " + 5 + " six " + "two" + " 3 " + 7

//Exercise 02: 
// Create a single string whose length is equal to the 
// result of the following expression:
// (10 * 3) / 2 + 3 * 6 (this has 33 characters, I counted)

"fjajajajajajajajajajkfkfkfkfkfkfk".length // I'm a lazy bastard :S