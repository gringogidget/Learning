// another way of repeating code

// for(initilization; condition; step) {
// run some code, ding dong
// }

// print the numbers from 1 to 5 using a for loop

for (var count = 0; count < 6; count++) {
  console.log(count)
}

// print the numbers 1-5 with a long-ass while loop
// variable is initialized outside of the loop, while in a for loop, it's inside

var count = 1;

while(count < 6) {
  console.log("count is: " + count);
  count++;
}


// for some reason that we don't know, "i" is used in for loops as the
// variable name

var str = "hello";

for(var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// same code with long-ass while loop
 var str = "hello";
 var count = 0;

 while(count < str.length) {
   console.log(str[count]);
   count++;
 }


////////// tricky ass trick prints "hello", ya dummie ( prints every other character )

var str = "ahceclwlxo";

for(var i = 1; i < str.length; i += 2) {
  console.log(str[i]);
}


////////// Problem sets:


// print all numbers between -10 and 19 (using for loop)

for (var count = -10; count < 20; count++) {
  console.log(count)
}

// print all even numbers between 10 and 40 (using for loop)

for (var count = 10; count <= 41; count+= 2) {
  console.log(count)
}

// a better way (actually check if it's even)

for (var i = 10; i <= 40; i += 1) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

// print all odd numbers between 300 and 333 (using for loop)

for (var count = 300; count <= 333; count++) {
  if(count % 2 !== 0) {
  console.log(count)
}
}

// print all numbers divisible by 5 and 3 between 5 and 50 (using for loop)

for (var i = 5; i <= 50; i++) {
  if(i % 5 === 0 && i % 3 === 0) {
  console.log(i)
}
}
