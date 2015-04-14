// Add a bark method for the snoopy object.


function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function(){           //var bark = function()
    console.log("Woof Woof!!");
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark(); //this.bark();





//**********
// make a person called me with your name and age
// then use printPersonName to print your name


function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

var me = new Person("Kristina Groeger", 33);
printPersonName(me);





//**********

// Add a meow method to the cat prototype:

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console

Cat.prototype.meow = function () {
    console.print("Meow!");
    };

