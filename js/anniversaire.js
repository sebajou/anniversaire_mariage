

$("#First").click(function() {
  $("#Second").fadeIn("slow", function() {
  });
});

$("#Second").click(function() {
  $("#Third").fadeIn("slow", function() {
  });
});

$('#lien').mouseover(function(){
  $("#message_popup").fadeIn("fast", function() {
  });
});

$("#Third").click(function(){
        $("#rondCoeur").toggle();
    });