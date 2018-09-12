
function i18Util(fileName){
	var lang = util.getLocal("lang");
	var lanFile = 'i18n/zh/'+fileName;
	if (lang=="en"){
  		lanFile = 'i18n/en/'+fileName;
	}else if(lang=="zh"){
	  	lanFile = 'i18n/zh/'+fileName;
	}
  	$.getJSON(lanFile,function(data){
    	const di18n = new DI18n({
	      locale: lang,
	      isReplace: true,  
	      messages: { 
	        en: data,
	        zh: data
	      }
	    })
   })  
}


