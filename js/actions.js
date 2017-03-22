$(document).ready(function(){
    
    //var width = document.getElementById('step-one').offsetWidth +4;

    $("#skills-path").click(function(){
        $(window).scrollTo('#skills', 500);
    });

	$("#work-path").click(function(){
        $(window).scrollTo('#work', 500);
    });
    
    $("#contact-path").click(function(){
        $(window).scrollTo('#contact', 500);
    });

    $("#mail").click(function(){
        $(window).scrollTo('#contact', 500);
    });

    $("#footer-mail").click(function(){
        $(window).scrollTo('#contact', 500);
    });

    $("#back").click(function(){
        $(window).scrollTo('#start', 500);
    });

	// nav

    var nav = $("nav");
    navs = "nav-scrolled";
    hdr = $('header').height();

	$(window).scroll(function() {
		if( $(this).scrollTop() > 492)
		{
	    	nav.addClass(navs);
		}
		
		else
		{
			nav.removeClass(navs);
		}
	});

	// pb fade out

	$(window).scroll(function() {
		if( $(this).scrollTop() > 300)
		{

	    	$("#pb").fadeOut(300);
		}
		
		else
		{

			$("#pb").fadeIn(500);
		}
	});

	// to the top button

	$(window).scroll(function() {
		if( $(this).scrollTop() > 888)
		{
			$("#back").css({"opacity": "0.5"});

			$("#back").mouseover(function() {
		  		$("#back").css({"opacity": "0.25"});
			});

			$("#back").mouseout(function() {
		  		$("#back").css({"opacity": "0.5"});
			});
		}
		
		else
		{
			$("#back").css({"opacity": "0"});
		}
	});

	// --> if back button is near footer make it invisible
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 144) {
			$("#back").css("opacity", "0");
   		}
	});

	// expand images

	var bilder = $('#expandable div .bild').length;
	var bheight = bilder * '260' + (30*44);

	$("#more").click(function(){
        $('#expandable').css("max-height", bheight);
        $("#more").css("display", "none");
    });

    // lightbox options

    lightbox.option({
      'resizeDuration': 500,
      'fadeDuration': 500,
      'disableScrolling': true,
      'positionFromTop': 70,
      'showImageNumberLabel': false
    })
});