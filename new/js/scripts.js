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
      "href"   : el.attr("href"),
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

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
    }
  }
});

/*
$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 260,
    itemMargin: 0,
    //pausePlay: true,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});
*/