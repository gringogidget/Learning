/*$(document).ready(); syntax.

$() says, "hey, jQuery things are about to happen!"
Putting document between the parentheses tells us that we're about to work our magic on the HTML document itself.
.ready(); is a function, or basic action, in jQuery. It says "hey, I'm going to do stuff as soon as the HTML document is ready!"
Whatever goes in .ready()'s parentheses is the jQuery event that occurs as soon as the HTML document is ready.
So,

$(document).ready(something);
says: "when the HTML document is ready, do something!" (We'll show you how to replace something with an action in the next exercise.)

Note that .ready(); ends with a semicolon. This tells jQuery that you're done giving it a command.