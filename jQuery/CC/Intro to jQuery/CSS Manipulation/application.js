$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).addClass("highlight");
  }).on("mouseleave", function() {
    $(this).removeClass("highlight");
  });
});