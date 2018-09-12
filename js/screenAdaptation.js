$(function() {
	var docEl = document.documentElement || document.body,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			//设置根字体大小       
			var width;
			width = parseInt((docEl.clientWidth - 1170) / 2) + "px"
			if(docEl.clientWidth >= 1170) {
				docEl.style.fontSize = 100 * (docEl.clientWidth / 1920) + 'px';
				docEl.style.fontSize = 100 * ((document.documentElement.clientWidth || document.body.clientWidth) / 1920) + 'px';
				$(".l-margin").css("margin-left", width);
				$(".r-margin").css("margin-right", width);
				$('.container').css({
					"margin-left": width,
					"margin-right": width
				});
			} else {
				docEl.style.fontSize = '60px';
				$('.container').css({
					"margin-left": '0px',
					"margin-right": '0px'
				});
			}
		};

	//绑定浏览器缩放与加载时间
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
});