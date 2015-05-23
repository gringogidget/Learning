var myPizza =  process.argv;////['pineapple', 'anchovies', 2, 5, 'bacon', 'gf3Sucks']
//console.log("LENGTH?", myPizza.length)
var newPizza = myPizza.slice(2);
//console.log("newPizza Length", newPizza.length);
var sum = 0;

for (var i = l; i < newPizza.length; i++) {
	sum = sum + Number(newPizza[i]);  
}

console.log(sum);

/*

codeschool's answer:

    var result = 0
    
    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])
    
    console.log(result)

    */