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
