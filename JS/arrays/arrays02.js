// to loop over an array using a for loop, we need to make use of the array's
// length property:

// if you have 10,000 comments on a reddit post, you would need to print them
// all. USE a loop: DRY METHOD:

// using for loop:
var colors = ["red", "orange", "yellow", "green"];
for (var i = 0; i < colors.length; i++) { // keeps going for however many characters are in the array
  console.log(colors[i]);
}


// FOR EACH (forEach)
arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(iLoveDogs){
  // color is a placeholder, call it whatever
  console.log("INSIDE THE FOR EACH " + iLoveDogs);
});
// returns:
//INSIDE THE FOR EACH red
//INSIDE THE FOR EACH orange
//INSIDE THE FOR EACH yellow
//INSIDE THE FOR EACH green

function printColor(color){
  console.log("*******");
  console.log(color);
  console.log("*******");
} // undefined
printColor("purple")
//returns:
//*******
//purple
//*******


colors.forEach(printColor);  //if you add () it will execute
// returns:
// *******
// red
// *******
// *******
// orange
// *******
// *******
// yellow
// *******
// *******
// green
// *******


// same thing with a while loop (it's longer and hardly ever used)

var count = 0;
while(count < colors.length) {
console.log(colors[count]);
  count++;
}


// exercise:
// what does the following code print out?
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];


numbers.forEach(function(color)) { // color is a bad name for this argument
  if (color % 3 === 0) {
    console.log(color);
  }
});
// the colors are just there to distract you.
// it returns multiples of 3: 3, 6, 9.
