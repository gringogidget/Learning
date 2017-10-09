/*Constructors in Review

Constructors are a way to make objects with the keyword new. 
The most basic constructor is the Object constructor, which 
will make an object with no methods or properties.

For more complicated objects we can make our own constructors 
and put in whatever properties and methods we want.

Our Rabbit constructor defines an adjective property and a describeMyself method.

Recall how these kind of custom constructors are important 
because they allow us to easily make many similar objects. */

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
rabbit1.describeMyself();