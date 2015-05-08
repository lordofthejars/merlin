$(document).ready(function () {
	$.getJSON( "assets/json/speakers.json", function( data ) {
	  divtalk = "<ul style='list-style-type:none'>";
	  $.each( data.speakers, function( key, val ) {
	  	if (val.enabled == 1 && val.talk != "" && divtalk.indexOf(val.talk.title) < 0) {
			if(val.url!=""){
				divtalk += "<li><a style='font-size : 1.6em; ' href='"+val.url+"'>"+val.talk.title.substr(0,65) +"</a>";
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
				divtalk += "<span class='label label-" + label_type + "' style='margin-left : 5px; font-size : 0.8em; '>" + value + "</span>";
			  });
			}
			divtalk += "</li>";

			
		}
	  });
	divtalk += "</ul>"; 
	$(divtalk).appendTo( "#grid-talks" );
	});
});