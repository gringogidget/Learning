var lastPoop = prompt("When was the last time you pooped? Was it yesterday, today, or are you poopin' right now? (Type YESTERDAY, TODAY, or RIGHT NOW").toLowerCase();


switch(lastPoop) {

  case 'yesterday':
    var before = prompt("Wow that's a long time ago. Was it before or after noon? (type BEFORE or AFTER)").toLowerCase();
    var after = prompt("You're going to poop in about 15 minutes. Get yourself to a toilet.").toLowerCase();
    if(before === 'YES' || after === 'YES') {
      console.log("After all that milk you had at lunch, you'd better have some three-ply ready.");
    } else {
      console.log("Don't worry, a poop is coming soon. Drink some prune juice.");
    }
    break;


  case 'today':
    var one = prompt("All right, how many times though? one or two? (ONE or TWO)?").toLowerCase();
    var two = prompt("In about two hours, you're going to get the hotsnakes!").toLowerCase();
    if(one === 'YES' && two === 'YES') {
      console.log("You're not going to poop until tomorrow and you'll be totally constipated until then.");
    } else {
      console.log("You poop is out of control and I can't tell you when you're going to poop next. You're a hopeless shit machine. Sorry.");
    }
    break;


  case 'right now':
    var smooth = prompt("Ho, dang. You're a poop pro! Is it smooth, or are you constipated? (Type SMOOTH, or CONSTIPATED).").toLowerCase();
    var constipated = prompt("It'll come like a baseball through a toilet paper tube tomorrow morning.").toLowerCase();
    if(smooth === 'YES' || constipated === 'YES') {
      console.log("When you're ridin' in the Chevy and you're feelin' something heavy... Tonight at 8pm.");
    } else {
      console.log("I hope you have your running shoes on because you're goign to poop RIGHT NOW!");
    }
    break;
  default:
    console.log("I didn't understand your entry. Please type YESTERDAY, TODAY, or RIGHT NOW.");
}