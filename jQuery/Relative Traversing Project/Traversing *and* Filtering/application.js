$(document).ready(function(){
  $("#filters").on("click", ".on-sale", function(){
    $(".highlight").removeClass("highlight");
    $(".tour").filter(".on-sale").addClass("highlight");
  });

  $("#filters").on("click", ".featured", function(){
    $(".highlight").removeClass("highlight");
    $(".tour").filter(".featured").addClass("highlight");
  });
});
