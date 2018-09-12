$(function(){
	var phone,verification,passwd,repasswd;
	//账号格式验证
	eventUtil.addHandler($("#phone")[0],"input",function(){
		if (util.isMobile(this.value)) {
			phone = this.value;
			$(this).parent(".input-group").removeClass("has-error");
			$(this).parent(".input-group").addClass("has-success");
			if(!util.isEmpty($("#verification").val())){
				$("#btn-next").removeAttr("disabled");
				$("#btn-next").addClass("btn-primary");
			}
		} else{
			$(this).parent(".input-group").addClass("has-error");
			$("#btn-next").attr("disabled",true);
			$("#btn-next").removeClass("btn-primary");}
	});
	//验证码格式验证
	eventUtil.addHandler($("#verification")[0],"input",function(){
		verification = this.value;
		checkPasswd(this);
	});
	//获取验证码
	eventUtil.addHandler($("#btn-verification")[0],"click",function(){
		phone = $("#phone").val();
        if (util.isMobile(phone)) {
            util.serviceGet("userservice/getUserRegValify/" + phone, function (str) {
                getVerificationCode(JSON.parse(str));
            });
        } else {
        	$(".alert")[0].innerText = "请输入正确手机号。";
			$(".alert")[0].style.display="block";
        }
	}); 
	//密码格式验证
	eventUtil.addHandler($("#passwd")[0],"input",function(){passwd=this.value; checkPasswd(this);});
	eventUtil.addHandler($("#repasswd")[0],"input",function(){repasswd=this.value; checkPasswd(this);});

	
	//提交
	eventUtil.addHandler($("#submit")[0],"click",function(){		
		var user = {};
        user.phone = phone;
        user.passwd = passwd;
        user.passport = verification;
        user.code = "";
        user.wechatid = "";
        user.passwd = $.md5(user.passwd);
        util.servicePost("userservice/userRegister", user, function (str) {
            signResult((str.indexOf("{") < 0) ? str : JSON.parse(str));
        });

	});
	function signResult(data){
		if (data.errorCode == 0) {
            util.saveLocal("UINFO", data.result);
            app.popup.ShowAlert("注册成功","success", function () {
                app.util.goNext("Main.html",-1);
            });
       } else {
            $(".alert")[0].innerText = "注册失败，请稍后重试。";
			$(".alert")[0].style.display="block";
            return;
        }
	}
	function getVerificationCode (data){
		$(".alert")[0].style.display="none";
		if (data.errorCode != 0) {
            $(".alert")[0].innerText = "获取失败，请重试。";
			$(".alert")[0].style.display="block";
            return;
       } 
        $("#btn-verification").attr("disabled", "true");
        var time = 90;
        var timer = setInterval(function () {
            if (time == 0) {
                $("#btn-verification").removeAttr("disabled");
                $("#btn-verification").text("重新获取");
                clearInterval(timer);
            } else {
                $("#btn-verification").text("剩余" + (time--) + "秒");
            }
        }, 1000);
	}
	function checkPasswd (_this){
		var _this = _this;
		if(!util.isEmpty($(_this).val())){
			$(_this).parent(".input-group").removeClass("has-error");
			$(_this).parent(".input-group").addClass("has-success");
		}else{
			$(_this).parent(".input-group").removeClass("has-success");
			$(_this).parent(".input-group").addClass("has-error");
		}
		if(!util.isEmpty(passwd) && !util.isEmpty(repasswd) && !util.isEmpty(phone) && !util.isEmpty(verification)){
			$("#submit").removeAttr("disabled");
			$("#submit").addClass("btn-primary");
		}else{
			$("#submit").attr("disabled",true);
			$("#submit").removeClass("btn-primary");
		}
	}
})
