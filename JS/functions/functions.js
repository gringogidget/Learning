////////// what's going on here?
// understand why we use functions
// define a function without arguments
// define a function with arguments
// return a value from a function


// functions let us wrap up bits of code into reusable packages

// declare the function:
function doSomething () { // function is a keyword just like var or if // name of function // parenthesis // curly braces
  console.log("HELLO WORLD");
}
// then call it by mentioning the name of the function with parentheses and a colon:
doSomething ();
doSomething ();


////////// arguments

function square(num) { // num is the name of an argument, it can be called anything
  console.log(num * num);
}

square(10); //changes num to 10 and does the console.log task: prints 100
square(3); //prints 9
square(4); //prints 16

//////////

function area(length, width) {
  console.log(length * width);
}
area(9,2); // 18

//////////

function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("harry", "ron", "hermoine");

////////// using the return keyword

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris"; // "paris"
var capital = capitalize(city); //"Paris" - we can capture the returned value in a variable

////////// function declaration vs. function expression:

// declaration:
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// expression:
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

////////// problem set:

// 1) write a function isEven(), which takes a single numeric argument and returns true if the number is even, and false otherwise

function isEven(evenNumber) {
  if (evenNumber % 2 === 0) {
  return ("true")
} else {
      return("false")
    }
  }
isEven(5);

// or MUCH SHORTER

function isEven(evenNumber) {
  return num % 2 === 0;
}
isEven(5);

// 2) write a function factorial(), which takes a single numeric argument and returns the factorial of that number
// a factorial is a number x the numbers below it eg: 4! is 4x3x2x1

function factorial(x) {
  if (x > 0) {
    return x * (x -1)
  } else {
    if (x === 0) {
      return ("1")
    }
  }
}

factorial(0);

// or

function isEven(num) {
  return x % 2 === 0;
}
function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
factorial(3);

// 3) write a function kebabToSnake(), which takes a single kebab-cased string argument and returns the snake_cased version

function kebabToSnake(changeIt) {
  if (changeIt === "-") {
    str.replace("-", "_");
  }
}
kebabToSnake("hello-world");
