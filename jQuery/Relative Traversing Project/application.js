$(document).ready(function(){
  $(".tour").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).append(message).find("button").remove();
  });
});