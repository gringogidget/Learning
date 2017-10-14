// a note on forEach

var nums[34, 45, 90, 24389, 23]

nums.forEach(function(num){
  console.log(num);
})

// returns 34, 45, 90, 24389, 23
// it envokes the function on every element/item in the array nums

var colours = ["red", "orange", "yellow", "green"];
function myForEach(arr, func) {
  // loop through array
  for (var i = 0; i < arr.length; i++) {
  // call func for each item in array
  func(arr[i]);
  }
}
myForEach(colours, alert);
