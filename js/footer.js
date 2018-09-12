function footer(){
	var wb = "code-wb";
	var data = '<div class="detail">' +
				'<div class="bfooter-c">' +
					'<div class="model">' +
						'<div><a href="#2">活动专区</a></div>' +
						'<div><a href="#2">进行活动</a></div>' +
						'<div><a href="#3">热门活动</a></div>' +
						'<div><a href="#2">往期活动</a></div>' +
					'</div>' +
					'<div class="model">' +
						'<div><a href="#2">关于公司</a></div>' +
						'<div><a href="#2">公司简介</a></div>' +
						'<div><a href="#2">加入我们</a></div>' +
						'<div><a href="#3">企业动态</a></div>' +
					'</div>' +
					'<div class="model">' +
						'<div><a href="#2">关于我们</a></div>' +
						'<div>' +
							'<a data-toggle="tooltip" data-placement="right" title="<span class=\'code-wb\'></span>">新浪微博</a>' +
						'</div>' +
						'<div>' +
							'<a data-toggle="tooltip" data-placement="right" title="<span class=\'code-wx\'></span>">官方微信</a>' +
						'</div>' +
						'<div>' +
							'<a data-toggle="tooltip" data-placement="right" title="<span class=\'code-tt\'></span>">官方头条</a>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="fl-right">' +
					'<div>联系方式</div>' +
					'<div>400-100-0306</div>' +
					'<div>(周一至周日9:00-18:30)</div>' +
				'</div>' +
			'</div>' +
			'<div class="f-bootom">' +
				'<img src="./img/bottom-line.png"/>' +
				'<p>版权归深圳众保汽车俱乐部和深圳成为智能交通系统有限公司所有  | <a href="ZBLawStatement.html">法律申明</a> | <a href="ZBTiaoKuan.html">隐私条款</a></p>' +
				'<p><a class="icp" href="http://www.miit.gov.cn"><span>粤ICP备11046807号-8</span></a></p>' +
			'</div>';
	$("#footer").append(data);
}
