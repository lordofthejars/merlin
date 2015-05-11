$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  $.each( data.speakers, function( key, val ) {
		if(val.scheduleId!=null){
			
			divspeaker="<a href='"+val.url+"'><div><span class='title'>"+val.talk.title+"</span><span class='speaker'>"+val.name+"</span></div></a>";
			$(val.scheduleId).html(divspeaker);
		}
	  });
	});
});

$('#showFriday').click(function(){
 $('#saturday').hide();
 $('#friday').show();
 $('#showSaturday').removeClass("active");
 $('#showFriday').addClass("active");
 return false;
});

$('#showSaturday').click(function(){
 $('#friday').hide();
 $('#saturday').show();
 $('#showFriday').removeClass("active");
 $('#showSaturday').addClass("active");
 return false;
});