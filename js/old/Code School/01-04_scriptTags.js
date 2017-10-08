// Running JS in an HTML file
// Embedding code that signals which JS file to use

<html>
<head>
<script src="trains.js"></script> // we want some JS executed ok?
</head>
<body>
<h1>JAVASCRIPT EXPRESS!</h1>
...
</body>
</html>

// Adding files to appropriate locations

root/
	index.html
	trains.js // needs to be in the same dir as index.html as per above


// Another structure:

root/
	index.html
	scripts/
		trains.js // <script src="scripts/trains.js"></script>


// Link syntax for distant files
//	Staying organized means we'd have to be more detailed on our src links
//		with double-dot notation "..". This will go up a folder, first.

root/
	pages/
	index.html

	scripts/
	trains.js  // <script src="../scripts/trains.js"></script>