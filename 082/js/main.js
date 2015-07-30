$(document).ready(function() {
  $(".orig-text").each(function(i) {
    $( this ).collapse();
    $( this ).bind("opened", function(e, section) {
      console.log($( this ).find("h6 > a").text("▼ hide original text"));
    });
    $( this ).bind("closed", function(e, section) {
      console.log($( this ).find("h6 > a").text("▶ show original text"));
    });
  });
});
