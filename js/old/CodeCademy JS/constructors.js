/* When we write 'bob = new Object()' we're using a built-in constructor (object)
This constructor is already defined by the JavaScript language and just makes an object with no properties or methods. Add properties one at a time*/

var bob = new Object();
bob.name = "Bob Smith";

/*Add the properties one at a time */

bob.age = 20;


/* The easier way to do this is to make your own object constructors.
Set properties for an object when it's created instead. 
*/

/* Here, the PERSON is used ot make 'Person' objects. 
Keyword THIS defines the name and age properties and sets them equal to the parameters given. */

function Person(name,age) {
  this.name = name;
  this.age = age;
}

/* Let's make bob and susan again, using our constructor */

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);

// help us make george, whose name is "George Washington" and age is 275

var george = new Person("George Washington", 275);


/* More practise:
Why is this Cat constructor so cool? It means if we have many cats and wanted to create 
an object for each cat, we could just use this constructor with the properties already defined. */

function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(breed, tails) {
    this.breed = breed;
    this.tail = tails;
}

/*Create a new object called sally using the Person constructor. Her name is "Sally Bowles" and she is 39. Create another object called holden. His name is "Holden Caulfield" and he is 16.
Edit the sentence printed out such that it includes the age of sally and holden respectively. */

function Person(name,age) {
this.name = name;
this.age = age;
this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);


/* In addition to the basic Object constructor, we can define our own custom constructors. These are helpful for two reasons:

We can assign our objects properties through parameters we pass in when the object is created.
We can give our objects methods automatically.
These both work to save us time and lines of code when we make objects. */

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}


var the_hobbit = new Book(320, "J.R.R. Tolkien");

