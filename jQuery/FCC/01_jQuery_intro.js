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