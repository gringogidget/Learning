/*
- Write a person constructor (person) with two properties (name, age).
- Create an empty array (family) 
- Using the person constructor, create four objects and put them 
into the array.
- Create a for-loop that loops through the family array and prints
out the name property for each family member in order of creation.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var family = new Array ();
family[0] = new Person ("alice", 40);
family[1] = new Person ("bob", 42);
family[2] = new Person ("michelle", 8);
family[3] = new Person ("timmy", 6);

for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
    
};

/**********/

/* Calculate the difference in age between two people */

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function

var diff = ageDifference(alice, billy);

/**********/

// Our person constructor

function Person (name, age) {
this.name = name;
this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people

var ageDifference = function(person1, person2) {
return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge);

var olderAge = function(person1, person2){
if(person1.age > person2.age) {
return person1.age;}else {return person2.age};
};
