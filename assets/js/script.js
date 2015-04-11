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
function initPortfolio () {
    var portfolio = $('#portfolio');
    var items = $('.items', portfolio); 
    var filters = $('.filters li a', portfolio); 

    items.imagesLoaded(function() {
        items.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            transitionDuration: '0.7s'
        });
    });
    
    filters.click(function(){
        var el = $(this);
        filters.removeClass('active');
        el.addClass('active');
        var selector = el.attr('data-filter');
        items.isotope({ filter: selector });
        return false;
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

function initTwitterFeed() {
    /* More about fetch params on http://www.jasonmayes.com/projects/twitterApi */
    twitterFetcher.fetch('500674157688782849', '', 1, true, false, false, '', true, handleTweets, false);
}
$(document).ready(function () {
    initNavbar();
    initPortfolio();
    initAnimations();
    initTwitterFeed();
	loadRandomSpeakers();
});
$(window).load(function () {
    $(".loader .fading-line").fadeOut();
    $(".loader").fadeOut("slow");
});
function handleTweets(tweets) {
    var element = document.getElementById('feed');
    if (element) {
        var x = tweets.length;
        var n = 0;
        var html = '<ul class="list-inline">';
        while (n < x) {
            html += '<li>' + tweets[n] + '</li>';
            n++;
        }
        html += '</ul>';
        element.innerHTML = html;
    }
}

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
