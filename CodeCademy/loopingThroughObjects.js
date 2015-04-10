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