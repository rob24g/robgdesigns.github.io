// NAV STICK ON SCROLL
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('header-down').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('header-up').addClass('header-down');
        }
    }
    
    lastScrollTop = st;
}
// NAV STICK ON SCROLL END

// Adjust to screen size height

function windowH() {
   var wH = $(window).height();
   var wW = $(window).width();
   var midH = $('.mid').height();
   var skills = $('.sk1').height();

   if (wW <= 768) {
		$('.tools').removeClass('fadeInRight');
		$('.tools').addClass('fadeIn');
		$('.web').removeClass('fadeInLeft');
		$('.web').addClass('fadeIn');
   }
   $('#main, #about, .intro_cont, .content_col').css({height: wH + 20});
   
   if (wW <= 767) {
		$('#about, #skills, .content_col').css('height', '100%');

   }
   if (skills >= wH ) {
		$('#skills, .sk1, .skills-container').css('height', '100%');
   }
   else {
		$('#skills, .sk1, .skills-container').css({height: wH + 20});
   }

   //$('.content_col, .about_content, #skills').css('min-height', contH);
   
/* 	if(wH <= 767) {
		$('.mid').css({marginTop: -midH/4});
		$('.mid').css({marginTop: -midH/4});
	}
	else {
		$('.mid').css({marginTop: -midH/2});
	} */
}

// close nav
function navClose() {
	$(".nav li a").click(function(){
		$('.navbar-collapse').removeClass('in');
	}); 
}
// if page starts scrolled
function startedScrolled() {
	var $document = $(document),
		$element = $('body'),
		className = 'startedScrolled';

	$document.scroll(function() {
	  $element.toggleClass(className, $document.scrollTop() >= 1);
	});
}

// DOCUMENT READY

$(function() {

	new WOW().init();
	startedScrolled();
	windowH();

	$(".scroll_btn").click(function(){
		$(this).hide();
	}); 
	
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});
	
	// ON resize
	$( window ).resize(function() {
		windowH();
	});
	
	// Images loaded
	$('.outter_wrap').imagesLoaded( { background: true }, function() {
	  //console.log('.outter_wrap background image loaded');
	  
	  $('body').addClass('loaded');
	  $('.header').addClass('animated fadeInDown');
	  $('.intro_cont').addClass('animated fadeInUp');
	  
	});
	
	// Links to anchors
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
	});

	document.getElementById("footYear").innerHTML = new Date().getFullYear();
});