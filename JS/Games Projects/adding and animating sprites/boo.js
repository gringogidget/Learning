// JSON format
var Context = {
  canvas : null,
  context : null,
  create: function(canvas_tag_id) {
    this.canvas = document.getElementById(canvas_tag_id);
    this.context = this.canvas.getContext('2d');
    return this.context;
  }
};

// Add a Sprite constructor object 
var Sprite = function(filename, is_pattern) {

    this.image = null;
    this.pattern = null;
    this.TO_RADIANS = Math.PI/180;
    
    if(filename != undefined && filename != null)
    {
    	this.image = new Image();
    	this.image.src = filename;

    	if (is_pattern)
    		this.pattern = Context.context.createPattern(this.image, 'repeat');
    	}
    	else
    		console.log("Unable to load sprite.");

    	this.draw = function(x, y, w, h)
    	{

// Pattern

		if (this.pattern != null)
		{
			Context.context.fillStyle = this.pattern;
			Context.content.fillRect(x, y, w, h);
		
		} else {

// Image

		if (w != undefined || h != undefined)
		{
			Context.context.drawImage(this.image, x, y,
				this.image.width,
				this.image.height);
		} else {

// Stretched 

			Context.context.drawImage(this.image, x, y, w, h);

		}
 	} 
};

	this.rotate = function(x, y, angle)
	{
		Context.context.save();

		Context.context.translate(x, y);
		Context.context.rotate(angle * this.TO_RADIANS);
		Context.context.drawImage(this.image,
								-(this.image.width/2),
								-(this.image.height/2));
		Context.context.restore();
	}

// Load HTML first
$(document).ready(function(){

// Initialize HTML ID TAG
Context.create("canvas");

	var santa = "http://png-4.findicons.com/files/icons/1278/quickpix_2006/128/santa_sprite.png";
	var kirby = "http://img3.wikia.nocookie.net/__cb20140927212358/kirby/en/images/f/fb/KSSU_Hammer_Kirby_Sprite.png";


	var image = new Sprite(santa, false);
	var image = new Sprite(kirby, false);
	var pattern = new Sprite(kirby, true);
	var angle = 0;

	setInterval(function() {

		Context.context.fillStyle = "#000000";
		Context.context.filRect(0,0,800,800);

		image.draw(0,0,64,64);
		image.draw(0,74,256,32);
		pattern.draw(160,160,256,180);

		image.rotate(115,160, angle += 4.0);
		image2.rotate(115,260,-angle/2);
		

	}, 25);

});


// For each thing you draw you have to begin a new path
//Background color:
//Context.context.beginPath();




});