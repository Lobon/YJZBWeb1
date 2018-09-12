function header(){
	var data = '<div class="container">' +
				'<ul class="menu">' + 
		
					'<li tabindex="0" data-index="4">'+
						'<a href="aboutUs.html">关于我们</a>'+
					'</li>'+
					'<li tabindex="0" data-index="3"> '+
						'<a href="carOwnersEncyclopedia.html">车主百科</a>'+
					'</li>'+
					'<li tabindex="0" data-index="2">'+
						'<a href="ClaimCenter.html">理赔中心</a>'+
					'</li>'+
					'<li tabindex="0" data-index="1">'+
						'<a href="index.html">首页</a>'+
					'</li>'+
				'</ul>'+
				'<span class="fl-left icon-logo"></span>'+
			'</div>';
	$("#header").append(data);
	var index = $("#header").data("page");
	
	if (index != undefined){
		var list = $(".menu li")
		for (var i=0;i<list.length;i++) {
			if(list[i].dataset.index==index){
				//给a标签添加active
				$(list[i].children[0]).addClass("active");
			}
		}
		
	}
}
