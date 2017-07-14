var email = document.querySelector("#email");
var checkbox = document.querySelector("#checky");
var submitButton = document.querySelector("#postme");
checky.addEventListener("change", testFormValues);


function testFormValues() {
  if (checkbox.checked) {
    submitButton.removeAttribute("disabled");
  } else {
   submitButton.setAttribute("disabled", "");
}
}

function classToggle() {
    this.classList.toggle('class1');
    this.classList.toggle('class2');
}
document.querySelector('#postme').addEventListener('click', classToggle);
