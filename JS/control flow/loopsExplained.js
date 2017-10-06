////////// printing numbers from 1-5

var count = 1;

while(count < 6) {
  console.log("count is: " + count);
// count++ adds one. If you wanted to add two, type count+=2;
  count++;
}
//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5


/////////// print each character in a string

// string we're looping over:
var str = "hello";
// first character is at index 0
var count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
}
//"h"
//"e"
//"l"
//"l"
//"o"

////////// print out odd numbers

var num = 1;
// while the number is less than or equal to 10, print the number plus two 1, 3, 5, 7, 9, <-11
while(num <= 10) {
  console.log(num);
  num += 2;
}


////////// print out all multiples of 4 from 1 to 20

var num = 1

while(num <= 20) {
  // if number 4 mod 0, (does 4 divide evenly? If it does, print it out)
  if(num % 4 === 0) {
    console.log(num);
  }
  num++;
}


////////// TRICK. this is an infinate loop. 100 will always be less than 150

var num = 100;
// while the number is less than 150, subtract one
while(num < 150) {
  console.log(num +1);
  num--;
}
