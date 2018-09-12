$(function() {
	header();
	//获取页面内容
	var lang = util.getLocal("lang") != null ? util.getLocal("lang") : "zh";
	var pageIndex = 1;
	var pageSize = 2;
	var totalNum = 0; //理赔list总数
	var source2; //页面数据
	var template;
	$.ajaxSettings.async = false;
	$.getJSON("i18n/" + lang + "/claimCenter.json", function(data) {
		template1 = Handlebars.compile($("#entry-template1").html());	
		template3 = Handlebars.compile($("#entry-template3").html());
		$("#claim-deatil1").html(template1(data));
		$("#claim-deatil3").html(template3(data));
		
		//source2 = $("#entry-template2").html();
		//template2 = Handlebars.compile(source2);
		//getClaimPublic(data, pageIndex, pageSize);
		//pagination(data);
		//paginationAction();
	})
  
	//页面适配
	var adtapter = adapter();
	//理赔公式列表
	function getClaimPublic(data, curr, limit, totalCount) {

		util.serviceGet("claimservice/getAllClaimList/" + curr + "/" + limit, function(result) {
			//console.log(result);
			var results = JSON.parse(result);
			//console.log(result.result.img);
			if(results.errorCode == 0 && results.result.list.length > 0) {

				totalNum = results.result.totalNum;
				results.result.list.forEach(function(item, i) {
					util.servicePost("claimservice/getClaimByClid", {
						"clid": results.result.list[i].clid,
						"status": "NORMAL"
					}, function(str) {
						//console.log(str);
						var str = JSON.parse(str);
						if(str.errorCode == 0) {
							for(var j = 0; j < str.result.claimPhotos.length; j++) {
								str.result.claimPhotos[j].photopath = config.imgUrl + "photoPtr=" + str.result.claimPhotos[j].photopath;
							}
							//控制图片在4个以内
							if(str.result.claimPhotos.length > 4) {
								var length = str.result.claimPhotos.length
								for(var z = 0; z < length - 4; z++) {
									str.result.claimPhotos.pop();
								}
							}
							results.result.list[i].infoabstract = str.result.description;
							results.result.list[i].img = str.result.claimPhotos;
							data.public.result[i] = results.result.list[i];
							var context2 = template2(data) ;
							$("#claim-deatil2").html(context2);
						}
					})
				});
			}else{
				var context2 = template2(data) ;
				$("#claim-deatil2").html(context2);
			}

		})

	}

	//理赔公示显示分页
	function pagination(data) {
		//var page = $(".pagination");
		/*
		var list ="<li><a href='javascript:;'>&laquo;</a></li>";
		for (var i=1;i<=totalPage;i++) {
			list += "<li><a data-pageNum="+i+" href='javascript:;'>"+i+"</a></li>"
		}
		list += "<li><a class='disabled' href='javascript:;'>...</a></li><li><a href='javascript:;'>&raquo;</a></li>";
		page.append(list);	
		*/
		//console.log(totalNum);
		$('.pagination').extendPagination({

			totalCount: totalNum,

			showCount: 10, //分页栏展示数目

			limit: pageSize, //每页显示数据

			callback: function(curr, limit, totalCount) {

				//createTable(curr, limit, totalCount);
				getClaimPublic(data, curr, limit, totalCount);

			}

		});
	}
	//理赔分页操作
	/*
	function paginationAction(){
		var page = $(".pagination");
		for (var j=1;j<page.length;j++) {
			eventUtil.addHandler(page[j],"click",function(){
				console.log(this.dataset("pageNum"));
			});
		}
	}
	*/
	$.ajaxSettings.async = true;
});