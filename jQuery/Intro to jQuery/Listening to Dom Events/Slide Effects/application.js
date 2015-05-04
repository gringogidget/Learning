$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $(".photos").slideDown();
    $(".photos").slideToggle();
  });
});
