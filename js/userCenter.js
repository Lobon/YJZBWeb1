$(function() {	
	if(util.getLocal("UINFO")){
		var userInfo = util.getLocal("UINFO")
		$("#username")[0].innerText = userInfo.nickName + " 您好";
	}
	$.getJSON("i18n/zh/userCenter.json", function(data) {
		var source = $("#entry-template").html();
		var template = Handlebars.compile(source);
		var context = template(data);	
		$(".centerList").html(context);
		var lis = $(".centerList li");
		var src = "";
		var srcActive = "";
		for (var i=0;i<lis.length;i++) {
			src = lis[i].dataset.img; 
			lis[i].getElementsByTagName("span")[0].style.background="url(./img/"+src+") 50% bottom no-repeat";
			src = lis[i].onmouseover = function(){
				srcActive = this.dataset.imgactive;
				this.getElementsByTagName("span")[0].style.background="url(./img/"+srcActive+") 50% bottom no-repeat";
				this.getElementsByTagName("span")[1].style.color="#E5717A";
			}
			src = lis[i].onmouseout = function(){
				src = this.dataset.img;
				this.getElementsByTagName("span")[0].style.background="url(./img/"+src+") 50% bottom no-repeat";
				this.getElementsByTagName("span")[1].style.color="#666666";
			}
		}
	})	 
	var adtapter = adapter();  
 
});  