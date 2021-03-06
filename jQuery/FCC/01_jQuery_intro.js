/*$(document).ready(); syntax.

$() says, "hey, jQuery things are about to happen!"
Putting document between the parentheses tells us that we're 
about to work our magic on the HTML document itself.
.ready(); is a function, or basic action, in jQuery. It says "hey, 
I'm going to do stuff as soon as the HTML document is ready!"
Whatever goes in .ready()'s parentheses is the jQuery event that 
occurs as soon as the HTML document is ready.
So,

$(document).ready(something);
says: "when the HTML document is ready, do something!" (We'll show 
you how to replace something with an action in the next exercise.)

Note that .ready(); ends with a semicolon. This tells jQuery that 
you're done giving it a command.

*/

/*
Basic jQuery Events:

 "thing to touch" is the HTML element you'll click on, hover over, 
 or otherwise interact with, and "thing to affect" is the HTML 
 element that fades away, changes size, or undergoes some other 
 transformation.

*/

$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});

/*

Sometimes these elements are one and the same—you might hover 
over a <div> to change its opacity. Other times, you might interact 
with a separate element; for example, you might click on a button 
to resize a <div>.

Sometimes if you want an effect to occur right away, without an 
event like .click() or .hover().
*/

$(document).ready(function() {
    $('thingToAffect').effect();
});

// Exercise 1:
/* Using the examples above, make it so your 'div' fades to 1 (100%) 
opacity when your mouse enters the 'div'. Make the animation speed 
'fast'. (Make sure to give fadeTo() its inputs in order—speed, then opacity.)
*/

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
});

// Exercise 2:
/* Between the }); that ends your mouseenter() and the }); that ends 
your $(document).ready(), add a mouseleave() that uses fadeTo to return 
your div's opacity to 0.5. Like the previous fadeTo, it should have 
'fast' as its first input.
*/

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
});

// Exercise 3:
/* Make it .fadeOut() 'fast'! (Go ahead and do this immediately, without 
the need for a click.)
*/

$(document).ready(function() {
    $('div').fadeOut('fast');
});

/*Make it .fadeOut() 'fast' with a click: */

$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('fast');
    });
});


// Exercise 4:
// create a new selector and apply a hover event to have the dev turn red 

$(document).ready(function () {
    $('div').hover(function() {
        $(this).addClass('red');
    });
    $('div').click(function() { 
        $(this).fadeOut('fast');
    });
});


// Exercise 5:
// Make the button colour change on hover and exit


$(document).ready(function(){

  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

});


// Exercise 6:
// Make the button colour change to red with .focus()

$(document).ready(function() {
    $('input').focus(function() {
        $(this).css('outline-color','#FF0000');
    });
});


// Exercise 7:
// Using .animate() and .keydown(), find the first div and move ten pixels
// to the right

$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left:'+=10px'},500);
    });
});


// Exercise 8:
// Make an animated sprite move using .animate() and .keydown()

// HTML:

<!DOCTYPE html>
<html>
    <head>
    	<title>Super Mario!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
		<script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
	</body>
</html>

// CSS:

img {
    position: relative;
    left: 0;
    top: 0;
}

// jQuery:

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
                $('img').animate({top: "+=10px"}, 'fast');
				break;
			// Down Array Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
