var adapter = function() {
	$("[data-toggle='tooltip']").tooltip({
		html: true
	});
	
	var docEl = document.documentElement || document.body
	var width1 = parseInt((docEl.clientWidth - 1170) / 2);
	width1 = width1 >= 0 ? width1 + "px" : 0; 
	$('.container').css({
		"margin-left": width1,
		"margin-right": width1
	});
	$(".l-margin").css("margin-left", width1);
	$(".r-margin").css("margin-right", width1);
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			//设置根字体大小       
			var width;			
			if(docEl.clientWidth >= 1170) {
				width = parseInt((docEl.clientWidth - 1170) / 2) + "px";
				//docEl.style.fontSize = 100 * (docEl.clientWidth / 1920) + 'px';
				docEl.style.fontSize = '100px';
				$(".l-margin").css("margin-left", width);
				$(".r-margin").css("margin-right", width);
				$('.container').css({
					"width": '1170px',
					"margin-left": width,
					"margin-right": width
				});
			}else if(docEl.clientWidth >= 992){
				//width = parseInt((docEl.clientWidth - 970) / 2) + "px";
				docEl.style.fontSize = '80px';
				$('.container').css({
					"width": '1170px',
					"margin-left": 0,
					"margin-right":0
				});
				$("l-margin").css("margin-left", "0px");
				$("r-margin").css("margin-right", "0px");
			}
			else if(docEl.clientWidth < 992){
				docEl.style.fontSize = '60px';
				$('.container').css({
					"width": '1170px',
					"margin-left": '0px',
					"margin-right": '0px'
				});
				$("l-margin").css("margin-left", "0px");
				$("r-margin").css("margin-right", "0px");
			}
		};

	//绑定浏览器缩放与加载时间
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
}
//返回顶层按钮
$(function(){
	//$('body').append('<div id="toTop" class="btn btn-primary"><i class="fa fa-arrow-up"></i>Back to Top</div>');
	$('body').append('<button id="toTop" class="btn" style="-webkit-transform: translate3d(0px, 0px, 0px); transform: translate3d(0px, 0px, 0px); position: fixed; right: -10px; bottom: 40px; width: 100px; z-index: 10; opacity: 0.5; background-color: rgb(74, 74, 74);"><div style="margin-right: 10px;"><svg width="24px" height="24px" viewBox="0 0 512 512" fill="#F1F1F1"><path d="M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"></path></svg></div></button>')
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
