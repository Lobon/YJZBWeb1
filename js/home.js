	$(function() {
		
		$('#dowebok').fullpage({
			'verticalCentered': false,
			'css3': true,
			//'menu': true,
			//'anchors': ['menu1','menu2'], 
			//'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff','#F3F3F3'], 
			'scrollOverflow': true,
			'navigation': false,
			'navigationPosition': 'right',
			//'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple','footer'],
			'afterLoad': function(anchorLink, index) {
				if(index == 2) {
					//$('.content div:first-child').addClass('title1');
					//$('.content div:nth-child(2)').addClass('title2');
				}
				if(index == 3) {
					//alert("第三个页面");
				}
			},
			'onLeave': function(index, nextIndex, direction) {
				if(index == 1 && direction == 'down') {
					$("header").css("height", "80px");
					$(".menu").css("line-height", "80px");
					$('.section2 div:nth-child(2) div:first-child').addClass('type1');

				} else if(index == 2 && direction == 'down') {
					$('.section3 div:nth-child(2) div:first-child').addClass('type2');
					//$('.section3 div:nth-child(2) div:nth-child(2)').addClass('title2');
				} else if(index == 3 && direction == 'down') {
					$('.section4 div:nth-child(2) div:first-child').addClass('type3');
					//$('.section4 div:nth-child(2) div:nth-child(2)').addClass('title2');
				} else if(index == 2 && direction == 'up') {
					//$("header").css("height", "120px");
					//$(".menu").css("line-height", "120px");
				}
				if(index == 3 && direction == 'down') {
					$('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
				} else if(index == 3 && direction == 'up') {
					$('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
				}
				//$('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
				//$('#staticImg').toggleClass('moveDown', nextIndex == 4);
				//$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
			},
		});
		$("#home-banner").css("display", "none");
		//置顶
		//$.fn.fullpage.moveTo(1);
		//footer();
		$("#btn-top").on("click",function(){
			$.fn.fullpage.moveTo(1);
		})
	});

	$(".home-mask").fadeOut(3000);
	$(".home-logo").fadeIn(3000);
	$(".home-page").fadeOut(3000);
	setTimeout(function() {
		var docEl = document.documentElement || document.body;
		$("#home-banner").css("display", "block");
		$(".home-logo").css("display","none");

	}, 2800);
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
			$(".home-logo p:first-child").css("margin-top",docEl.clientHeight*0.35);
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
					"margin-left": '0px',
					"margin-right":'0px'
				});
				$("l-margin").css("margin-left", width);
				$("r-margin").css("margin-right", width);
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