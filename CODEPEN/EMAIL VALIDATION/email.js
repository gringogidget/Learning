var email = document.querySelector('#email');
var checkbox = document.querySelector('#checky');
var submitButton = document.querySelector('#postme');
checky.addEventListener('change', testFormValues);

function testFormValues() {
  if(checkbox.checked) {
    submitButton.removeAttribute('disabled');
  }
}

/*
function validateForm() {
    var theEmailToTest = document.forms["myForm"]["email"].value;
    validateEmail(theEmailToTest)
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

 */
