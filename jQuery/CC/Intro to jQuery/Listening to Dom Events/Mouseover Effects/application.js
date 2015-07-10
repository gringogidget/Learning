$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  }).on("mouseleave", "li", function() {
    $(this).find("span").slideToggle();
  });
});
