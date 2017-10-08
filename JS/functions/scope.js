function doMath() {
  var x = 40;
  console.log(x);
}
doMath()
// doMath returns "40", however if you type "x" into the console you'll
// get undefined. We get this because it's not in the global scope.


var y = 99;
//in global scope, 99 is accessible via "y"
function doMoreMath() {
  console.log(y);
}
doMoreMath() // returns 99
// when you declare the variable outsside of the function, it will return globally.


function doMoreMath() {
  y = 100;
  console.log(y);
}
y // returns 99
doMoremath() // returns 100
y // now returns 100


var phrase = "hi there!"
function doSomething() {
  var phrase = "Goodbye!";
  console.log(phrase)
}
doSomething() // prints "Goodbye!"
phrase // will return "hi there!"


var num = 8;
function doMath() { // doesn't run yet
  num += 1;         // makes the number 9 (plus one)
  if(num % 5 == 0) {
    return true
  } else {
    return false
  }
}
num += 1;         // adds 1
doMath()          // 10 is divisible by 5, so returns true
