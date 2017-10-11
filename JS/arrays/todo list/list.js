var todos = [];

var input = prompt ("What do you need to do today?");

while(input !== "quit") {
  // handle input
  if(input === "list") {
    console.log(todos);
  } else if(input ==="new") {
  // ask for new todo
  var newTodo = prompt("Enter new todo");
  // add todos to array
  todos.push(newTodo);
  }
  // ask again for new input
  var input = prompt ("What do you need to do today?");
}
console.log("Okay, good luck completing your tasks! Bye.");
