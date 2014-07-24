$(document).ready(function () {
  // Create the dropdown base
  $('<select class="mobile"/>').appendTo(".container .header .nav .menu");

  // Create default option "Go to..."
  $("<option />", {
    "selected": "selected",
    "value"   : "",
    "text"    : "navigation"
  }).appendTo(".nav select");

  // Populate dropdown with menu items
  $(".menu a").each(function() {
    var el = $(this);
    //console.log(el.attr("href"));
    $("<option />", {
      "href"    : el.attr("href"),
      "value"   : el.attr("href"),
      "text"    : el.text()
    }).appendTo(".nav select");
  });

  $(".nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 20
        }, 1000);
        return false;
      }
    }
  });

  $('.flexslider').flexslider({
    //animation: 'slide'
    pauseOnAction: false,
    pauseOnHover: true,
    prevText: '',
    nextText: '',
  });

  /*var easter_egg = new Konami(function () {
    $('#myModal').modal('show');
  });

  $('#acn').click(function () {
    $('#myModal').modal('show');
  });

  $('#currentUser').click(function () {
    $('#myModal').modal('show');
  });

  $('#cancel-login').click(function () {
    $('#myModal').modal('hide');
  });*/
});
/*
$(window).load(function() {
});*/