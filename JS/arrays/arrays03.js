////////// problems: //////////

// write a function printReverse() that takes an array as an argument
// and prints out the elements in the arrayin reverse order without
// changing the array



function printReverse(arr){
for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
}
printReverse([1, 2, 3, 4]);


// write a function isUniform() which takes an array as an argument
// and returns true if all elements in an array are identical
// hint: check first item and compare it to the rest of them in the loop

var isUniform = ([1, 1, 1, 1]);
function isUniform(arr) {
  var first = arr[0]; // first var is = first item in array
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] != first) {
      return false;
    }
  }
  return true;
}


// write a function sumArray() that accepts an array of numbers and
// returns the sum of all numbers in the array

sumArray([1, 2, 3]); // 6

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}


// write a function max() that accepts an array of numbers and
// returns the maximum number in the array

var max = ([1, 2, 3]); // 3

function max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
console.log(max);
