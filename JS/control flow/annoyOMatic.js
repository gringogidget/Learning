// a dumb and annoying game

var answer = prompt("Are we there yet?");
// add in another conditional
while(answer !=="yes" && answer !== "yeah" && answer !== "duh" && answer !== "shut the hell up") {
  var answer = prompt("Are we there yet?");
}
alert("Yay, we made it!");



////////// VERSION 2 this time, use indexof to find out if "yes" (or whatever) is in the string

var answer = prompt("Are we there yet?");
// the word "yes" does not exist within our sentance (-1 is false)
while(answer.indexOf("yes") == -1) {
  var answer = prompt("Are we there yet?");
}
alert("Yay, we made it!");
