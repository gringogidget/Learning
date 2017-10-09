/* In addition to setting properties, constructors also define methods. 
When an object is created it will have its own methods.

Here, Rectangle(constructor) sets height and width(properties) equal to their arguments.

calcArea(method) calculates the area of the rectangle in terms of its properties (height and width)

Rex(object) makes use of the constructor. It calls calcArea(method) and saves the result as "area"(variable). )
*/

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

/* define calcPerimeter(method), which calculates and resturns the perimeter for a Rectangle in terms of 
height and weight */

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
    return this.height * this.width;
};

// put our perimeter function here!

  this.calcPerimeter = function() {
return this.height * 2 + this.width * 2;
};

}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();