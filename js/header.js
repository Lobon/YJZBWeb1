$(function() {
	//$(".content").height=document.documentElement.clientHeight || document.body.clientHeight+"px";
	//是否显示二级菜单
	var index = 0;
	var submenu = $("#sub-menu");
	index = submenu[0].dataset.header;
	if(index == 99) {
		$('.s-header').css('display', 'none');
	} else {
		submenu.empty();
		$('.s-header').css('display', 'block');		
	}
	//二级菜单内容			
	var menuList = new Array();
	menuList[0] = [{
		content: "理赔流程",
		index: "1"
	}, {
		content: "理赔进度查询",
		index: "2"
	}, {
		content: "理赔公示",
		index: "3"
	}, {
		content: "理赔所需清单",
		index: "4"
	}, {
		content: "理赔常见问题",
		index: "5"
	}];
	menuList[1] = [{
		content: "保障单配送进度查询",
		index: "1"
	}, {
		content: "电子保障单信息",
		index: "2"
	}, {
		content: "保障单加保",
		index: "3"
	}, {
		content: "变更车牌",
		index: "4"
	}, {
		content: "违章查询",
		index: "5"
	}];
	menuList[2] = [{
		content: "常见问题",
		index: "1"
	}, {
		content: "关于相互制",
		index: "2"
	}, {
		content: "安全行车知识",
		index: "3"
	}];
	menuList[3] = [{
		content: "关于QMAC",
		index: "1"
	}, {
		content: "公司动态",
		index: "2"
	}];

	//二级菜单的显示			
	var smenuList = "";
	menuList[index].forEach(function(element, index) {
		//console.log(element);
		smenuList += "<li tabindex='0' data-href='"+element.index+"'><a href='javascript:void(0);'>" + element.content + "</a></li>";
	});
	submenu.append(smenuList);

	$(window).scroll(function(event) {
		if(util.getScrollTop() >= 100) {
			$('.s-header').css({'position':'fixed','top':'0'});
			$('.s-header ul li').css('font-size','14px');
		}
		if(util.getScrollTop() <= 70) {
			$('.s-header').css('position', 'relative');
			$('.s-header ul li').css('font-size','12px');
		}
	});
	
	var list = $("#sub-menu li"); 
	for (var i=0;i<list.length;i++) {
		eventUtil.addHandler(list[i],"click",function(){ 
			var t_a = $("[data-page='" + this.dataset.href + "']").offset();
			$("html,body").animate({
				scrollTop: t_a.top - "60" + "px"
			}, 500);
			//点击的子菜单添加红色背景图片
			this.style.setProperty('background-image','url(../YJZBWeb/img/header-menu-bg.png)');
//			this.style.setProperty('background-image','url(../img/header-menu-bg.png)');  //提交到西安成为用这个路径
			this.style.setProperty('background-repeat','no-repeat');
			this.style.setProperty('background-position','center');
			//选取当前 li 的子元素 a 元素字体变为白色
			this.firstChild.style.setProperty('color','#FFFFFF'); 
			//其它的子菜单按钮背景红色取消
			aaa = list.not(this); //选择除当前元素的其它元素
			j = list.length-1;
//			bbb=(list.not(this))[0];
			for(var k=0;k<j;k++){
				
				(list.not(this)[k]).style.removeProperty('background-image');
				(list.not(this)[k]).firstChild.style.setProperty('color','#333333');//其它未选中的a标签字体颜色恢复
			}
//			this.removeAttr('background-image');
		})
		
	}
});