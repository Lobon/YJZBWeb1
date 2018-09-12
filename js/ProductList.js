function getList(result) {
	var data = "";
	for(var i = 0; i < result.length; i++) {
		data += "<div class='model1'>" +
			"<div class='container'>" +
			"<img class='model-img' src='img/"+result[i].src+"'/>" +
			"<div class='context'>"
			for(var j = 0; j < result[i].h1.length; j++) {
				data += "<h3>" + result[i].h1[j] + "</h3>";
			}
			if(result[i].h2) {
				data += "<h4>" + result[i].h2 + "</h4>";
			}
			for(var z = 0; z < result[i].span.length; z++) {
				data += "<p>" + result[i].span[z] + "</p>";
			}
		data += "</div></div></div>";
	}
	return data;
}

function getFile(fileName,callfunction) {
	var lanFile = 'i18n/zh/' + fileName;
	var list = "";
	$.getJSON(lanFile, function(data) {
		list = getList(data.result);
		if(list){callfunction(list);} 
	})
} 