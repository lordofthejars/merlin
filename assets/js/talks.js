$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  divtalk = "<ul style='list-style-type:none'>";
	  data.speakers.sort(function(a, b){
			if(a.talk.title < b.talk.title) return -1;
			if(a.talk.title > b.talk.title) return 1;
			return 0;
	  })
	  $.each( data.speakers, function( key, val ) {
	  	if (val.enabled == 1 && val.talk != "" && divtalk.indexOf(val.talk.title) < 0) {
			if(val.url!=""){
				divtalk += "<li><a href='"+val.url+"'><span class='title'>"+val.talk.title +"</span> by <span class='speaker'>"+ val.name ;
				if(val.cospeakerref!=null){
					for(var i=0;i<data.speakers.length;i++){
						valspeaker2 = data.speakers[i];
						if(valspeaker2.ref == val.cospeakerref){
							divtalk += " & " +valspeaker2.name ;			
						}
					}
				}
				divtalk += "</span></a>";
			}
			if (val.talk.tags) {
			  $.each(val.talk.tags, function (index,value) {
			  	label_type = "label-default";
			  	switch (value) {
			  		case "Database" : 
			  		case "CouchBase" : 
			  		case "NoSQL" : 
			  		case "MongoDB" :	label_type = "primary"; break;

			  		case "Legacy" : 
			  		case "Integration" : 
			  		case "Messaging" : 
			  		case "Scalability" : label_type = "success"; break;

			  		case "IoT" : 
			  		case "Microservices" : 
			  		case "Services" : 
			  		case "Cloud" : label_type = "info"; break;

			  		case "Scala" : 
			  		case "Akka" : 
			  		case "Java8" : 
			  		case "FunctionalProgramming" : 
			  		case "Clojure" : label_type = "warning"; break;

			  		case "Java" :
			  		case "Groovy" : 
			  		case "Play!" :
			  		case "Gradle" : label_type = "danger"; break;
			  		
			  		default : label_type = "default"; 
			  	}
				divtalk += "<span class='label label-" + label_type + "' style='margin-left : 5px; font-size : 0.8em; display:inline-block'>" + value + "</span>";
			  });
			}
			divtalk += "</li>";

			
		}
	  });
	divtalk += "</ul>"; 
	$(divtalk).appendTo( "#grid-talks" );
	});
});