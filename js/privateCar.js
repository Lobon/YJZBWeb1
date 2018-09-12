$(function() {
	header();
	getFile("privateCar.json", function(list) {
		$("#list").append(list);
		var myadapter = adapter();
	}); 

});  