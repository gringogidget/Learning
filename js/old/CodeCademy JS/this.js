/* FIRST METHOD Using THIS:
here we define our method using "this", before we even introduce bob
*/

var setAge = function (newAge) {
  this.age = newAge;
};

/* 
now we make bob 
*/

var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
/* 
make susan here, and first give her an age of 25
*/

var susan = new Object();
susan.age = 25;
susan.setAge = setAge;


/* 
here, update Susan's age to 35 using the method
*/
susan.setAge(35);

/***********************************************

SECOND METHOD:

*/

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
/* 
here is our method to set the height
*/

rectangle.setHeight = function (newHeight) {
this.height = newHeight;
};

/* 
help by finishing this method
*/

rectangle.setWidth = function (newWidth) {
this.width = newWidth;
};

/* 
here change the width to 8 and height to 6 using our new methods
*/

rectangle.setWidth(8);
rectangle.setHeight(6);



