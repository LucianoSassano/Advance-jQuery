$(document).ready(function(){
	$("#btn1").click(function(){
		$("#test1").text(function(i,origText){
			return "Old text: " + origText + "New text : jQuery Rocks! (index: " + i + ")";
		});
	});

	$("#btn2").click(function(){
		$("#test2").text(function(i,origText){
			return "Old html: " + origText + "New html : <strong>TEXT</strong> jQuery Rocks! (index: " + i + ")";
		});
	});


});