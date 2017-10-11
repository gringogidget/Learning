/*
var todos = ["Buy New Turtle"];
var input = prompt("What do you need to do today?");

while (input !== "quit") {
  // handle input
  if (input === "list") {
    console.log("**********")
    todos.forEach(function(todo, i) { // i refers to index
      console.log(i + ": " + todo);
    });
    console.log("**********")
  } else if (input === "new") {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add todos to array
    todos.push(newTodo);
    console.log("Your todo is added");
  } else if (input === "delete") {
    //  ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    // delete that todo
    // splice()
    todos.splice(index, 1);
    console.log("Your todo is deleted");
  }
  // ask again for new input
  var input = prompt("What do you need to do today?");
}
console.log("Okay, good luck completing your tasks! Bye.");
*/


/////////////////////////////////////////////// clean the logic up:

var todos = ["Buy New Turtle"];
var input = prompt("What do you need to do today?");

while (input !== "quit") {
  // handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
  deleteTodo();
  }
  // ask again for new input
  var input = prompt("What do you need to do today?");
}
console.log("Okay, good luck completing your tasks! Bye.");

function listTodos() {
  console.log("**********")
  todos.forEach(function(todo, i) { // i refers to index
    console.log(i + ": " + todo);
  });
  console.log("**********")
}
function addTodo() {
  // ask for new todo
  var newTodo = prompt("Enter new todo");
  // add todos to array
  todos.push(newTodo);
  console.log("Your todo is added");
}
function deleteTodo() {
  //  ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  // delete that todo
  // splice()
  todos.splice(index, 1);
  console.log("Your todo is deleted");
}
