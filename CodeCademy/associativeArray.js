/* fill in lines 9 and 10 so that Bob's lastName and email are printed out. */

var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-777",
  email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

/* Create an object called mary. It has the same properties as bob. Her name 
is Mary Johnson, her phoneNumber is "(650) 888 - 8888" and her email is 
"mary.johnson@example.com". Create an array called contacts. Put bob in first 
(at index 0), then mary (at index 1). 
Write a console.log statement that prints out Mary's phone number. */


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

console.log(mary.phoneNumber);



/* Define a function called printPerson that takes a parameter called person.
In the function body, print out the person parameter's firstName property by 
accessing it with a dot just like before. Then print a space, then their 
lastName in the same way. Call the printPerson() function to print out the 
first item in the contacts array. The first item in an array is at position 0.
Then on the next line, call printPerson() again to print out the second 
item in the contacts array. */

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

var printPerson = function(person) {
    console.log(person.firstName + ' ' + person.lastName);
}

printPerson(contacts[0]);
printPerson(contacts[1]);



/* Create a function called list that does not take any parameters.
At the start of the function, define a variable to store the number 
of items in the contacts array. Call it contactsLength.
All of the items in an array are numbered, starting at 0. To cycle 
through all of the elements of the array, create a for loop that cycles 
from 0 up to one less than the number of items in the contacts array.
Inside of the loop, add code to call printPerson, passing in the 
element of the array that the loop is currently at.
At the very bottom of the file, call the list function. 
The list function should then loop through every member of the contacts array and print its information.
*/


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
console.log(person.firstName + " " + person.lastName);
}

var list = function(){
for (i = 0; i < contacts.length; i++) {

printPerson(contacts[i]);

}
}

list()

/* Create a function called search that takes a parameter called lastName. Leave the list function alone.
define a variable and store the number of items in the array in it. (Since every function has its own 
context, or scope, you can call this variable contactsLength, too, if you like!)
Create a for loop that runs through all of the items in the array. For this step, the code for search is identical to that of list.
in the body of the loop, rather than printing out every single item in the array, add an if statement that checks to see if the lastName property of the object is equal to the lastName argument. Have the function run printPerson on the person if and only if the lastName property of the person matches the lastName argument.
At the bottom of the file, call the search function, passing in "Jones" as the last name to search for.
*/


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].lastName === lastName){
            printPerson(contacts[i]);
      }         
   }
}
search("Jones");


/* Create a function to add another person to this list, then call the function. */

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].lastName === lastName){
            printPerson(contacts[i]);
      }         
   }
}

search("Jones");

var add = function (firstName, lastName, email, phoneNumber) {
    
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber
};
}

add("Krust", "Tuna", "butts@butt.com", "(666) 666-6666");
list();




