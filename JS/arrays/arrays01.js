// objective: define and add data to arrays
// utilize built-in array methods: push/pop/shift/unshift
// console todo list

var friends = ["Picard", "Riker", "Troi", "Lizard Queen"];
// picard: 0, riker: 1, troi: 2, lizard queen 3 (duh)
friends[1] + " <3 " + friends[2] // riker <3 troi

// to change a name in the array, you can update like this:
friends[3] = "Luoxana Troi";

// to add a name into the array, add a number that doesn't exist yet:
friends[4] = "Data";

// you can initialize an empty array in two ways:
var friends = [] // no friends :(
var friends = new Array() // uncommon

// arrays can hold any type of Data
var random_collection = [49, true, "Enterprise", null];

// arrays have a length property
var nums = [45,37,89,24];
nums.length // 4

// array methods

// push adds an item to the last element in the array
var friends = ["Picard", "Riker", "Troi", "Lizard Queen"];
// add it to a specific place in the array:
friends[2] = "Geordie");
//or
friends.push("Geordie"); // adds geordie to the end without index


// pop removes the last element in the array
var friends = ["Picard", "Riker", "Troi", "Lizard Queen"];
friends.pop();
var removed = friends.pop(); // Lizard Queen

// shift adds to the front of the array
// unshift removes first item in the array

// indexOf will find the index of an item in an array
var friends = ["Picard", "Riker", "Troi", "Lizard Queen"];
friends.indexOf("Troi"); // 2
friends.indexOf("Worf"); // -1 returns if the element is not present

// slice will copy parts of an array
var friends = ["Picard", "Riker", "Troi", "Lizard Queen"];
var men.slice(0, 1); // returns picard and riker
// this will not alter the original array
// men will be it's own new array
// you can also use slice() to copy an entire array
var men = [1,2,3];
var everyone = men.slice();
// all names


// nested array or two dimensional array 
var enterprise = [
  ["dianna", "beverly", "ro"],
  ["data", "geordie", "lor"],
  ["picard", "riker", "worf"]
];
console.log(enterprise[2][0]); // returns picard, becuase picard
// is in the second (0, 1, 2) nested arraw and in the 0 position
