$(document).ready(function () {
	$.getJSON( "http://www.jbcnconf.com/assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		divspeaker="<div class='speaker-info col-md-3 col-sm-6 col-xs-12 teammate animated' data-animation='fadeInUp' data-delay='600'>"+
					  "<div class='profile-photo'>";
		if(val.url!=""){						  
			divspeaker=divspeaker+"<a href='"+val.url+"'><img class='img-responsive' src='"+val.image+"' alt='"+val.name+"'></a>";
		}
		else{
			divspeaker=divspeaker+"<img class='img-responsive' src='"+val.image+"' alt='"+val.name+"'>";
		}
		divspeaker=divspeaker+"</div>"+
		  "<div class='bio'>"+
			"<h4>"+val.name+"</h4>"+
			"<div class='border'></div>"+
			"<p>"+val.description+"</p>"+
			"<ul class='list-inline'>"+
			  "<li class='twitter'>"+
				"<a href='"+val.twitter+"' title='Twitter' target='_blank'>"+
				  "<i class='fa fa-twitter'></i>"+
				"</a>"+
			  "</li>";
		if(val.homepage!=null){
			divspeaker=divspeaker+"<li class='homepage'>"+
				"<a href='"+val.homepage+"' title='Homepage' target='_blank'>"+
				  "<i class='fa fa-file'></i>"+
				"</a>"+
			"</li>";
		}				  
		divspeaker=divspeaker+"</ul>"+
		  "</div>"+
		"</div>";
		$(divspeaker).appendTo( "#grid-speakers" );
	  });
	});
});