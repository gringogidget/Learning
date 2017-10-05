<!DOCTYPE html>
<html>
<head>
  <title>Guessing Game</title>
  <script type="text/javascript">

// create secretNumber
var secretNumber = 4;

// Ask user for guess. (Number(guess) takes the string of "guess" and turn it into a number
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess)

// Check if guess is right
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

// Otherwise, check if higher
else if(guess > secretNumber) {
  alert("Too high. Guess again");
}

// Otherwise, check if lower
else {
  alert("Too low. Guess again");
}

  </script>
</head>
</html>
