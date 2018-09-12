$(function(){
	var account,password;
	//登录
	eventUtil.addHandler($("#submit")[0],"click",function(){
		phone = $("#phone")[0].value;
		passwd = $("#passwd")[0].value;

		login(phone,passwd);
	});
	//账号验证
	eventUtil.addHandler($("#phone")[0],"input",function(){
		if (util.isMobile(this.value)) {
			$(this).parent(".input-group").removeClass("has-error");
			$(this).parent(".input-group").addClass("has-success");
			if(!util.isEmpty($("#passwd").val())){
				$("#submit").removeAttr("disabled");
				$("#submit").addClass("btn-primary");
			}
		} else{
			$(this).parent(".input-group").addClass("has-error");
			$("#submit").attr("disabled",true);
			$("#submit").removeClass("btn-primary");}
	});
	//密码验证
	eventUtil.addHandler($("#passwd")[0],"input",function(){
		if (util.isMobile($("#phone").val()) && !util.isEmpty(this.value)){
			$(this).parent(".input-group").addClass("has-success");
			$("#submit").removeAttr("disabled");
			$("#submit").addClass("btn-primary");
		}else{
			$("#submit").attr("disabled",true);
			$("#submit").removeClass("btn-primary");
		}
		if(util.isEmpty(this.value)){$(this).parent(".input-group").removeClass("has-success");}
	});
	/*
	//选择自动登录
	eventUtil.addHandler($("#auto-login")[0],"click",function(){
		if(this.dataset.auto=="0"){this.dataset.auto="1"}
		else{this.dataset.auto="0"}
		if(this.dataset.auto=="0"){
			$("#auto-login").removeClass("checked");
			$("#auto-login").addClass("unchecked");
		}else{
			$("#auto-login").removeClass("unchecked");
			$("#auto-login").addClass("checked");
		}
	});
	*/
	//账号密码登录登录
	function login(phone,passwd){
		var loginInfo = {"phone":phone,"passwd":$.md5(passwd)};
		util.servicePost("userservice/userLogin",loginInfo,function(str){
			str = JSON.parse(str);
			if(str.errorCode == 0){
				$(".alert")[0].style.display="none";
				util.saveLocal("UINFO",str.result);
				window.location.href = "index.html";
			}else{
				$(".alert")[0].innerText = "您的帐号或密码输入有误。";
				$(".alert")[0].style.display="block";
			}
		});
	}
	//初始化页面
	function init(){
		if(util.getLocal("UINFO")){
			var info = util.getLocal("UINFO");
			//history.back();
			$("#phone").val() = info.phone;
		}
		
	}
})
