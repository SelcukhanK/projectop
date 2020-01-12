const typer = () => {
  $("[data-typer]").attr("data-typer", function(i, txt) {

    var $typer = $(this),
      tot = txt.length,
      pauseMax = 300,
      pauseMin = 60,
      ch = 0;

    (function typeIt() {
      if (ch > tot) return;
      $typer.text(txt.substring(0, ch++));
      setTimeout(typeIt, ~~(Math.random() * (pauseMax - pauseMin + 1) + pauseMin));
    }());

  });
}

$(document).ready(function(){

// wrapper1 & kader1 = wat is ma?
// wrapper2 & kader2 = opleidingen

  typer();
  $(".logo").click(function(){
    $("#welkombijma").fadeIn();
    $("#wrapper1").fadeOut();
    $("#kader1").fadeOut();
    typer()
  });

  // Button Wat is MA
  $("#btnwrmma").click(function(){
    $("#welkombijma").fadeOut();
    $("#wrapper2").fadeOut();
    $("#kader2").fadeOut();

    $("#wrapper1").fadeIn();
    $("#kader1").fadeIn();
  });


});
