////////// print all numbers between -10 and 19

var num = -10;

while (num < 20) {
  console.log(num);
  num++;
}


////////// print all even numbers between 10 and 40

var num = 10;

while (num > 9 && num < 41) {
  console.log(num)
  num += 2;
}


////////// print all odd numbers between 300 and 333

var num = 300;

while (num > 299 && num < 334) {
  console.log(num);
  num += 2;
}

//or
var num = 300;

while (num <= 333) {
  if num % 2 != 0) {
    console.log(num);
  }
  num += 1;
}


////////// print all numbers divisible by 5 and 3 between 5 and 50

var num = 5;
// go until 50
while (num <= 50) {
  if(num % 3 === 0 && num % 5 === 0) {
  console.log(num);
}
  num += 1;
}
