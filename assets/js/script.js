function initNavbar() {

    var scrollSpeed = 750;
    var scrollOffset = 50;
    var easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });
	
    $("#nav-main").on("click", "a", null, function () {
         $("#nav-main").collapse('hide');
    });
}

function initAnimations() {
    $('.animated').appear(function () {
        var el = $(this);
        var animation = el.data('animation');
        var delay = el.data('delay');
        if (delay) {
            setTimeout(function () {
                el.addClass(animation);
                el.addClass('showing');
                el.removeClass('hiding');
            }, delay);
        } else {
            el.addClass(animation);
            el.addClass('showing');
            el.removeClass('hiding');
        }
    }, {
        accY: -60
    });

    // Service hover animation
	$('.service').hover(function(){
		$('i', this).addClass('animated tada');
	},function(){	
        $('i', this).removeClass('animated tada');
	});
}

$(document).ready(function () {
    initNavbar();
	initAnimations();
	loadRandomSpeakers();
});
$(window).load(function () {
    $(".loader .fading-line").fadeOut();
    $(".loader").fadeOut("slow");
});

function loadRandomSpeakers() {
	$.getJSON( "http://www.jbcnconf.com/assets/json/speakers.json", function( data ) {
		var currentIndex = data.speakers.length;
	    for(var i=0;i<4;i++){
			randomIndex = Math.floor(Math.random() * currentIndex);		
			val = data.speakers[randomIndex];
			divspeaker="<div class='speaker-info-home col-md-3 col-sm-6 col-xs-12 teammate animated' data-animation='fadeInLeft' data-delay='600'>"+
						  "<div class='profile-photo'>"+
							"<a href='"+val.url+"'><img class='img-responsive' src='"+val.image+"' alt='"+val.name+"'></a>"+
						  "</div>"+
						  "<div class='bio'>"+
							"<h4>"+val.name+"</h4>"+
							"<div class='border'></div>"+
							"<p>"+val.description+"</p>"+
							"<ul class='list-inline'>"+
							  "<li class='twitter'>"+
								"<a href='"+val.twitter+"' title='Twitter' target='_blank'>"+
								  "<i class='fa fa-twitter'></i>"+
								"</a>"+
							  "</li>"+				  
							"</ul>"+
						  "</div>"+
						"</div>";
			$(divspeaker).appendTo( "#grid-speakers-home" );
			currentIndex -= 1;
			if(currentIndex==0) break;
		}
	});
}
