$(function() {
	header();
	getFile("convoy.json", function(list) {
		$("#list").append(list);
		adapter();
	});

});   