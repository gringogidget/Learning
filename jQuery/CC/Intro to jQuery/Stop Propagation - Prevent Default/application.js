$(document).ready(function() {
  $(".see-photos").on("click", function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest(".tour").find(".photos").slideToggle();
  });
  $(".tour").on("click", function() {
    alert("This should not be called");
  });
});
