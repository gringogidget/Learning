 Rectangle = function(x, y, w, h,) {
 	if(x === null || y === null || w === null || h === null)
 	{
 		alert("You did not pass all the required variables");

 		var errorMsg = "The following was not provided";
 		if (x === null)
 			errorMsg += " 'x' ";
 		if (y === null)
 			errorMsg += " 'y' ";
 	    if (w === null)
 			errorMsg += " 'width' ";
 		if (h === null)
 			errorMsg += " 'height' ";

 		throw new Error(errorMsg);
 	}

 	this.x = x;
 	this.y = y;
 	this.width = w;
 	this.height = h;

 	this.Contains = function(x, y)

 	{
 		if (x >= this.x && x <= this.x + this.width &&
 			y >= this.y && y <= this.y + this.height)
 		
 		{
 			return true;
 		}
 		else 
 			return false;
 	}
 };