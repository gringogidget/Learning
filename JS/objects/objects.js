///// reresher:
// name / age / city are keys

var person = {
  name: "Jean Luc",
  age: 53,
  city: "The Enterprise"
};

// bracket notation, similar to arrays:
console.log(person["name"]);

// dot notation:
console.log(person.name); // shorter and simpler

// you cannot use dot notaiton if the property starts with a number
someObject.1blah // invalid
someObject["1blah"] // valid

// you can look up using a variable with bracket notation
var str = "name";
someObject.str // doesn't look for "name"
someObject[str] // does evaluate str and looks for "name"

// you cannot use dot notation for property names with spaces
someObject.fav color // invalid
someObject["fav color"]; // valid


////// updating data:
// to update name:
person["name"] = "Riker"; // changes name
// to update age:
person["age"] += 1;
// to update city:
person.city = "London";


///// there are a few methods of initializing objects

// make an empty object and then add to it later:
var person = {}
person.name = "Jean Luc";
person.age = 53;
person.city = "The Enterprise";

// add it all at once
var person = {
  person.name = "Jean Luc",
  person.age = 53,
  person.city = "The Enterprise",
}

// another way of initializing an object
var person = new Object();
person.name = "Jean Luc";
person.age = 53;
person.city = "The Enterprise";
