$(function() {	
	//获取页面内容
	var lang = util.getLocal("lang")!=null ? util.getLocal("lang"):"zh";
	var source;  //页面数据
	var template;
	
	$.getJSON("i18n/"+lang+"/ZBLawStatement.json", function(data) {
		source = $("#entry-template").html();
		template = Handlebars.compile(source);
		var context = template(data);
		$("#deatil").html(context);
	})	 
	
	//页面适配
	var adtapter = adapter();  
});   