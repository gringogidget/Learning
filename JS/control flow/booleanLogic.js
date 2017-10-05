// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// check if age is negative */
if (age < 0) {
console.log("come back once you're out of the womb")
}

// check if age is 21
if (age === 21) {
  console.log("happy 21st birthday")
}

// check if age is odd
// (not evenly divisible by two)
if (age % 2 !== 0) {
  console.log ("your age is odd")
}

// check if age is perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square")
}
