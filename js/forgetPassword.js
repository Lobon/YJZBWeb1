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
		if (util.isMobile($("#phone").val()) && !util.isEmpty(this.value)){
			$(this).parent(".input-group").addClass("has-success");
			$("#btn-next").removeAttr("disabled");
			$("#btn-next").addClass("btn-primary");
		}else{
			$("#btn-next").attr("disabled",true);
			$("#btn-next").removeClass("btn-primary");
		}
		if(util.isEmpty(this.value)){$(this).parent(".input-group").removeClass("has-success");}
		verification = this.value;
	});
	//获取验证码
	eventUtil.addHandler($("#btn-verification")[0],"click",function(){
		phone = $("#phone").val();
        if (util.isMobile(phone)) {
            util.serviceGet("userservice/getUserForgetPWDValify/" + phone, function (str) {
                getVerificationCode(JSON.parse(str));
            });
        } else {
        	$(".alert")[0].innerText = "请输入正确手机号。";
			$(".alert")[0].style.display="block";
        }
	}); 
	//验证码验证
	eventUtil.addHandler($("#btn-next")[0],"click",function(){
        //phone = $("#phone").val();
        //verification = $("#verification").val();
        if (util.isEmpty(phone) || (!util.isMobile(phone))) {
            $(".alert")[0].innerText = "请输入正确手机号。";
			$(".alert")[0].style.display="block";
            return;
        }
        if (util.isEmpty(verification)) {
            $(".alert")[0].innerText = "请输入验证码。";
			$(".alert")[0].style.display="block";
            return;
        }
        util.serviceGet("userservice/checkUserForgetPWDValify/" + phone + "/" + verification,
            function (str) {
                var data = JSON.parse(str);
                if (data.errorCode != 0) {
                    $(".alert")[0].innerText = "验证码输入错误，请重试。";
					$(".alert")[0].style.display="block";
                } else {
                    goToNext();
                }
            });
	});
	//密码格式验证
	eventUtil.addHandler($("#passwd")[0],"input",function(){passwd=this.value; checkPasswd();});
	eventUtil.addHandler($("#repasswd")[0],"input",function(){repasswd=this.value; checkPasswd();});
	//提交
	eventUtil.addHandler($("#submit")[0],"click",function(){		
        if (util.isEmpty(passwd)) {
            $(".alert")[0].innerText = "请输入新密码";
			$(".alert")[0].style.display="block";
            return;
        }
        if (passwd != repasswd) {
            $(".alert")[0].innerText = "两次输入密码不相同";
			$(".alert")[0].style.display="block";
            return;
        }
        var query ={"passwd":passwd,"phone":phone,"passport":verification};
        util.servicePost("userservice/modifyUserPwd", query, function (str) {
            var data = JSON.parse(str);
            if (data.errorCode != 0) {
                $(".alert")[0].innerText = "修改失败，请重试";
				$(".alert")[0].style.display="block";
            } else {
                //history.back();
                window.location.href="index.html";
            }
        });
	});
	function getVerificationCode (data){
		$(".alert")[0].style.display="none";
		if (data.errorCode != 0) {
            $(".alert")[0].innerText = "获取失败，请重试";
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
	function goToNext (){
		$("#page1").fadeOut(500, function () {
            $("#page2").fadeIn(500);
        });
	}
	function checkPasswd (){
		if(!util.isEmpty(passwd) && !util.isEmpty(repasswd)){
			$("#submit").removeAttr("disabled");
			$("#submit").addClass("btn-primary");
		}else{
			$("#submit").attr("disabled",true);
			$("#submit").removeClass("btn-primary");
		}
	}
})
