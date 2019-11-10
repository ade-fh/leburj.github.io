$(document).ready(function (){
  $(".pop-up-trigger").click(function (){
    $("#landing-page").fadeOut("slow", function () {
      $("#pop-up").fadeIn(1500);
      $(".right").fadeOut("slow");
    });
    
  })

  $("#back").click(function (){
    $("#pop-up").fadeOut("slow", function() {
      $("#landing-page").fadeIn(1000);
      $(".right").fadeIn(1000);
    });
    
  })
});

document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});