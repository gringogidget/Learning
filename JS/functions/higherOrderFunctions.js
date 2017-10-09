// set function
function sing() {
  console.log("🎶 When I first met you, didn't realize");
  console.log("🎶 I can't forget you, for your surprise");
  console.log("🎶 you introduced me, to my mind");
  console.log("🎶 And left me wanting, you and your kind");
}
// set interval: setInterval(anotherFunc, interval in miliseconds)
setInterval(sing, 1000)
// execute function
sing()
// clear it after running twice
clearInterval(2);

//////////anonymous function
setInterval(function(){
  console.log("I am an anonymous function!");
  console.log("Yeah, okay");
}, 2000); // interval of two seconds
