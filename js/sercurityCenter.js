$(function() {
	history.back();
	$.getJSON("i18n/zh/sercurityCenter.json", function(data) {
		var source = $("#entry-template").html();
		var template = Handlebars.compile(source);
		var context = template(data);		
		$("#sercurity-deatil").html(context);
		/*var lis = $(".centerList li");
		var src = "";
		var srcActive = "";
		for (var i=0;i<lis.length;i++) {
			src = lis[i].dataset.img; 
			lis[i].getElementsByTagName("span")[0].style.background="url(../YJZBWeb/img/"+src+") 50% bottom no-repeat";
			src = lis[i].onmouseover = function(){
				srcActive = this.dataset.imgactive;
				this.getElementsByTagName("span")[0].style.background="url(../YJZBWeb/img/"+srcActive+") 50% bottom no-repeat";
				this.getElementsByTagName("span")[1].style.color="#E5717A";
			}
			src = lis[i].onmouseout = function(){
				src = this.dataset.img;
				this.getElementsByTagName("span")[0].style.background="url(../YJZBWeb/img/"+src+") 50% bottom no-repeat";
				this.getElementsByTagName("span")[1].style.color="#CCCCCC";
			}
		}
		*/
	})	 
	var adtapter = adapter();  
});  