/*
Sometimes you want to keep information hidden.
Private variables are pieces of info you don't want to 
publically share. They can only be directly accessed from 
within the class.

The Person class has been modified to have a private 
variable called bankBalance.

It's a normal var, but it's defined inside the constructor
for Person without using THIS (instead using VAR).

This makes bankBalance a private var.

*/

function Person(first,last,age) {
this.firstname = first;
this.lastname = last;
this.age = age;
var bankBalance = 7500;
}

// create your Person 
var john = new Person("John", "Malarkey", 20);
var balance = john.bankBalance;
// try to print his bankBalance
console.log(balance);


