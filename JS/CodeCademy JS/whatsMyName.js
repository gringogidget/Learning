/*jshint multistr:true */

var text = "Hi, my name is Kristina. I like to eat pizza and\
play with my cat, Jimmy. Kristina might be my name, but my\
nickname is Krustuna. You can call me that instead of\
Kristina";

var myName = "Kristina";

var hits = [" "];

for (var i=0; i<= text.length; i++) {
    if (text[i] === "K") {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}