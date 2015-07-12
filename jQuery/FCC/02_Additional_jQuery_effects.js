// Exercise 1: 
// Use necessary jQuery to .hide your div when the document is ready.

$(document).ready(function() {
    $('div').hide();
});


// Exercise 2:
// .animate() practice: 
// Make the image go down by 100px and at 1 second:

$(document).ready(function(){
    $('img').animate({top: "+=100px"}, 1);
});


// Exercise 3: 
// Using jQuery UI make the image explode.

//HTML:

<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
		<link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
		<div></div>
	</body>
</html>

//jQuery:

$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
    });
});


// Exercise 4:
// Bounce image 3x within 500 milliseconds

$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce', {times:3}, 500);
    });
});


// Exercise 5: 
// Make the image slide

$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('slide');
    });
});


// Exercise 6:
// Call the .draggable() funciton on '#car'

$(document).ready(function() {
    $(function() {
        $("#car").draggable();
    });
});


// Exercise 7:
// Call the .resizable() funciton on 'div'

$(document).ready(function() {
    $(function() {
        $('div').resizable();
    });
});


// Exercise 8:
// Call the .selectable() function on 'ol'

$(document).ready(function() {
    $(function() {
        $('ol').selectable();
    });
});


// Exercise 9:
// .sortable() can be used to click and drag 'ol' elements

$(document).ready(function() {
    $(function() {
        $('ol').selectable();
    });
});


// Exercise 10:
// Add an .accordion() dropdown menu to a #menu

$(document).ready(function() {
    $(function() {
        $('#menu').accordion();
    });
});
