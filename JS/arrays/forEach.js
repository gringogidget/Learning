// a note on forEach

var nums[34, 45, 90, 24389, 23]

nums.forEach(function(num){
  console.log(num);
})

// returns 34, 45, 90, 24389, 23
// it envokes the function on every element/item in the array nums

var colors = ["red", "orange", "yellow", "green"];
function myForEach(arr, func) {
  // loop through array
  for (var i = 0; i < arr.length; i++) {
  // call func for each item in array
  func(arr[i]);
  }
}
myForEach(colors, alert);

// use an annonymous function
myForEach(colors, function(){alert("HI")})
// the parentheses don't invoke a function, you need to add () afterwards


// adding to an object
Array.prototype.myForEach = funciton(func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}
var friends = ["charlie", "dave", "matty", "caitlin"];

friends.myForEach(alert)
// or
friends.myForEach(function(name)){
  console.log("I love " + name);
})
