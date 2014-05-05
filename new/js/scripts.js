// Create the dropdown base
$('<select class="mobile" />').appendTo(".container header .nav .menu");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "navigation"
}).appendTo(".nav select");

// Populate dropdown with menu items
$(".menu a").each(function() {
  var el = $(this);
  console.log(el.attr("href"));
  $("<option />", {
      "value"   : el.attr("href"),
      "text"    : el.text()
  }).appendTo(".nav select");
});

$(".nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});

$('.carousel').carousel({
  interval: 2000
});
