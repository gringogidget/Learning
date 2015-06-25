var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {

numSheep = numSheep*4;

console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!")

monthNumber++;

}

// every month, the population multiplies by 4
// print 





























var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

// while loop handles first 4 currentGen
while (currentGen <= 4) {
  // the first four output 62 megawatts
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

// currentGen var now starts at 5 and goes up to 15, increasing by 1
for (currentGen >= 5; currentGen <= totalGen; currentGen++) {
  //totalMW increases each increment by 124
  totalMW += 124;

  //print console new info
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;

  console.log ("Generator #"+ currentGen + " is on, adding 62 MW, for a total of "+ totalMW +" MW!");

  currentGen++;
}

for(currentGen >= 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;

  console.log ("Generator #"+ currentGen + " is on, adding 124 MW, for a total of "+ totalMW + " MW!");
}