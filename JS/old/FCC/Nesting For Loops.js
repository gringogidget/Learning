/* 

If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Instructions
Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

*/



function multiplyAll(arr) {
var product = 1;
// Only change code below this line
for (var i=0; i < arr.length; i++) {

for (var j=0; j < arr[i].length; j++) {
  product = (arr[i][j] * product);
}
}
// Only change code above this line
return product;
}

// Modify values below to test your code

multiplyAll([[1,2],[3,4],[5,6,7]]) ;