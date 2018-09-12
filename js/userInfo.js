$(function() {	
	var adtapter = adapter();  
	
	$("[name='my-checkbox']").bootstrapSwitch({
		state: false,
    	onColor: 'success',
    	offColor: 'success', 
    	onText: '男', 
    	offText: '女',
   		onSwitchChange : function(event, state) {  
        	console.log(state); 
    	}    
  	});    
	
	var list = $(".panel-heading>h3");
	$(".panel-body").css("display","none");
	$("div").find("[data-index='1']").css("display","block");
	for (var i=1;i<=list.length;i++) {
		eventUtil.addHandler(list[i-1],'click',function(){
			$(".panel-heading>h3").removeClass('selected');
			$(this).addClass('selected');
			$(".panel-body").css("display","none");
			$("div").find("[data-index='"+this.dataset.page+"']").css("display","block");
		})
	} 
});  