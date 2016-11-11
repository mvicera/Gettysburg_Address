$(document).ready(function() {

  $("body").fadeIn(3000);
});

$("h2").on("click", function() {
  $(this).animate({
    "opacity": ".25",
    "margin-left": "20px"
  }, 4000, function (){
    $("p").css("opacity", ".5");
  });
});

$("#switcher-default").on("click", function() {
  $("body").css("font-size", "62.5%");
});

$("#switcher-large").on("click", function() {
  $("body").css("font-size", "+=2px");
});

$("#switcher-small").on("click", function() {
  $("body").css("font-size", "-=2px");
});
