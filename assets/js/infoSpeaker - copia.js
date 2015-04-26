$(document).ready(function () {
	var ref = getURLParameter('ref');
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		if(val.ref == ref){
		 divspeaker="<div class='heading'>"+
			"<h2>"+val.name+"</h2>"+
            "<div class='border'></div>"+
		  "</div>"+
		  "<div class='row'>"+
			"<div class='col-lg-2 animated' data-animation='fadeInUp' data-delay='300'>"+
				"<img class='img-responsive' src='"+val.image+"' alt='"+val.name+"'>"+
				"<ul class='list-inline'>"+
				"<li class='twitter'>"+
					"<a href='"+val.twitter+"' title='Twitter' target='_blank'>"+
					"<i class='fa fa-twitter'></i>"+
					"</a>"+
				"</li>";
		if(val.homepage!=null){
				divspeaker=divspeaker+"<li class='homepage'>"+
					"<a href='"+val.homepage+"' title='Homepage' target='_blank'>"+
					"<i class='fa fa-globe'></i>"+
					"</a>"+
				"</li>";
		}
		divspeaker=divspeaker+"</ul>"+
			"</div>"+
			"<div class='col-lg-10 animated biography' data-animation='fadeInUp' data-delay='300'>"+
            "<p>"+val.biography+"</p>"+
			"</div>"+
          "</div>";
		  $(divspeaker).appendTo( "#speaker-info" );
		  
		if(val.talk !=null){
			divtalk="<div class='heading'>"+
					"<h2>"+val.talk.title+"</h2>"+
					"<div class='border'></div>"+
					"</div>"+
					"<div class='row'>"+
					"<p class='abstract'>"+val.talk.abstract+"</p>"+
					"</div>";
		  $(divtalk).appendTo( "#talk-info" );
		}
		  return false;
		}
		
	  });
	});
});

function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}