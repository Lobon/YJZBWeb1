
if (typeof jQuery === 'undefined') {
  throw new Error('没有提前载入jQuery 插件，无法初始化')
}

var config = {
	//serviceUrl: "http://192.9.200.98:8083/ChainWayInsurance/rest/",
	serviceUrl: "http://120.24.227.202:8080/ChainWayInsurance/rest/",
	//webUrl: "http://www.chbcar.com/YJZBWeb/",
	//imgUrl: "http://192.9.200.98:8083/ChainWayInsurance/servlet/ShowImageServlet.do?"
	imgUrl: "http://120.24.227.202:8080/ChainWayInsurance/servlet/ShowImageServlet.do?"
};

var util = {
	isEmpty: function(str) {
		if(str == undefined || str == null || str == "null" || str.length == 0 || str == "undefined")
			return true;
		return false;
	},
	isMobile: function(str) {
		return(/^1[3|4|5|8|7]\d{9}/.test(str));
	},
	isEmail: function(str) {
		return(/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(str));
	},
	isIDCard: function(str) {
		return(/\d{17}[\d|x]|\d{15}/.test(str));
	},
	servicePost: function(url, query, successCall, showLoading) {
		$.post(config.serviceUrl + url, query,
			function(str) {
				if(typeof(str) == "object") {
					str = JSON.stringify(str);
				}
				if(successCall) successCall(str);
			}
		);
	},
	serviceGet: function(queryUrl, successCall, showLoading) {
		$.get(config.serviceUrl + queryUrl,
			function(str) {
				if(typeof(str) == "object") {
					str = JSON.stringify(str);
				}
				if(successCall) successCall(str);
			}
		);
	},
	saveLocal: function(name, value) {
		if(typeof(value) == "object") {
			value = JSON.stringify(value);
		}
		localStorage[name] = value;
	},
	getLocal: function(name) {
		var value = localStorage[name];
		if(value == null || value == undefined) return null;
		if(value.indexOf("{") >= 0) {
			value = JSON.parse(value);
		}
		return value;
	}, 
	setParm: function(name, value) {
		if(typeof(value) == "object")
			sessionStorage[name] = JSON.stringify(value);
		else
			sessionStorage[name] = value;
	},
	getParm: function(name) {
		var str = sessionStorage.getItem(name);
		if(this.isEmpty(str)) return null;
		if(str.indexOf("{") >= 0) {
			sessionStorage.removeItem(name);
			return JSON.parse(str);
		} else {
			sessionStorage.removeItem(name);
			return str;
		}
	},
	getScrollTop: function() {
		var scrollTop = 0;
		if(document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		} else if(document.body) {
			scrollTop = document.body.scrollTop;
		}
		return scrollTop;
	},
	//导航栏右上角的登录、注册跳转
	redict:	function (canshu) {         
          //接下来使用js代码进行页面跳转  
          window.location.href = canshu;  
  		}
	
	
};
//事件监听方法，优点：可同时监听多个事件。缺点：如果事件很多的话就比jq的on事件慢很多
//事件委托：原理，将事件加到父元素或祖元素上，效率高
/*
var eventUtil={
	addHandler:function(element,type,hanlder){
		if(element.addEventListener){
			element.addEventListener(type,hanlder,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,hanlder);
		}else{
			element['on'+type]=hanlder;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	}
}
*/
var eventUtil={
	addHandler:function(element,type,hanlder){
		if(element.addEventListener){
			element.addEventListener(type,hanlder,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,hanlder);
		}else{
			element['on'+type]=hanlder;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	}
}
/*
var login = {
	//1、检查session(user) 存在 已登录状态 为空 执行2
	//2、检查cookie(user) 存在 请求登录并保存user信息到session 为空 未登录状态
	if(util.isEmpty($.session.get("UINFO"))){
		if(util.isEmpty($.cookie('UACC')) || util.isEmpty($.cookie("PSWD"))){
			//未登录状态
			
		}
		else{
			//后台登录请求
			var loginInfo = {"phone":phone,"passwd":$.md5(passwd)};
			util.servicePost("userservice/userLogin",loginInfo,function(str){
			str = JSON.parse(str);
			if(str.errorCode == 0){
				util.saveLocal("UINFO",str.result);
			}
		});
		}
	}else{
		
	}
	
}*/
