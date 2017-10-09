/*Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
*/


// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

var lookup = {

  alpha:"Adams",
  bravo:"Boston",
  charlie:"Chicago",
  delta:"Denver",
  echo:"Easy",
  foxtrot:"Frank"

};
  result=lookup[val];
  
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
