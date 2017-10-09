var totalGen = 19;
var totalMW = 0;

for(var currentGen =1; currentGen <=totalGen; currentGen ++){
  
  if (currentGen <=4 && currentGen %2 == 0) {
    var firstsGenMW = 62;
    totalMW = (totalMW + firstsGenMW);
    console.log("Generator #" + currentGen  + " is on, adding " + firstsGenMW + " MW, for a total of " + totalMW + " MW!");
  
  } else if (currentGen >=5 && currentGen %2 == 0){
    var secondGenMW = 124;
    totalMW = (totalMW + secondGenMW);
    console.log("Generator #" + currentGen  + " is on, adding " + secondGenMW + " MW, for a total of " + totalMW + " MW!");
  
  } else {
  console.log("Generator #" + currentGen  + " is off.");
  }
}