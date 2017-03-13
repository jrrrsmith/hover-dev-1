//Buttons

$( "#nav-toggle" ).click(function() {
      hoverMenu();
      console.log("Menu click");
});

$( ".sub-menu" ).click(function() {
  hoverMenu();
  console.log("Sub menu click");
});

 $(".down-arrow").on("click" ,function(){
  console.log("down arrow clicked");
  var y = $(window).scrollTop(); $("html, body").animate({ scrollTop: y + $(window).height() }, $(window).height());
 });

function hoverMenu() {
    $( "#menu" ).toggleClass("hidden");
    $( ".down-arrow").toggleClass("hidden");
    $( "body" ).toggleClass("noscroll");
    $( "html" ).toggleClass("noscroll");
    $( "#nav-toggle").toggleClass("active");
}

//smooth scroll

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

//video thumbs

//play video on hover
$(document).on('mouseover', 'video', function() {
    $(this).get(0).play(); 
}); 

//pause video on mouse leave
$(document).on('mouseleave', 'video', function() { 
    $(this).get(0).pause(); 
});