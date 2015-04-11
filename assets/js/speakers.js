$(document).ready(function () {
	$.getJSON( "http://www.jbcnconf.com/assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		divspeaker="<div class='speaker-info col-md-3 col-sm-6 col-xs-12 teammate animated' data-animation='fadeInLeft' data-delay='600'>"+
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
		$(divspeaker).appendTo( "#grid-speakers" );
	  });
	});
});