$( document ).ready(function() {
   Application={};


   $(document)
   		.on("keydown",".txtinput",function(e){if(e.keyCode == 13){Application.addItem()}})
   		.on("dblclick","span",function(){Application.changeItem(this)})
   		.on("keydown",".subtxtinput",function(e){
   			switch(e.keyCode){
   				case 13: Application.permitChange(this) 
   				break;
   				case 27: Application.forbidChange(this)
   				break;
   			}})
   		.on("click","[type=\"checkbox\"]",function(){Application.checked(this)})
   		.on("click",".delbutton",function(){Application.removeItem(this)})
   		.on("click",".chckall",function(){Application.checkAll(this)})
   		.on("click",".remall",function(){Application.delCheked()});





   Application.addItem = function(){
   		
   		!$(".txtinput").val() || $(".goodsList").append("<li><input type=\"checkbox\"><span>"+$(".txtinput").val()+"</span><div class=\"delbutton\">X</div></li>");
   		$(".txtinput").val("");
   };

   Application.changeItem = function(targetItem){
   		$(targetItem)
   			.css("display","none")
   			.parent().append("<input class=\"subtxtinput\" type=\"text\">")
   			.children(".subtxtinput").val($(targetItem).text());
   			
   };

   Application.permitChange = function(targetItem){
   		!$(targetItem).val() || $(targetItem).parent().children("span").text($(targetItem).val()).css("display","inline-block")
   			.parent().children(".subtxtinput").remove();

   };

   Application.forbidChange = function(targetItem){
   		$(targetItem).parent().children("span").css("display","inline-block")
   			.parent().children(".subtxtinput").remove();
   };

   Application.checked = function(targetItem){
   		if ($(targetItem).prop("checked") == true){
   			$(targetItem).parent().children("span").addClass("cheked");
   		}else{
   			$(targetItem).parent().children("span").removeClass("cheked");
   		}

   };

   Application.removeItem = function(targetItem){
   		$(targetItem).parent().remove();
   };

   Application.checkAll = function(targetItem){
	   	if($(targetItem).prop("checked")==true){
	   		$(".goodsList li input").each(function(){
	   			$(this).prop("checked",true);
	   			Application.checked(this);
	   		})
	   		$("[for=\"glchek\"]").text("Unselect All");
	   	}else{
	   		$(".goodsList li input").each(function(){
	   			$(this).prop("checked",false);
	   			Application.checked(this);
	   		});
	   		$("[for=\"glchek\"]").text("Select All");
		}
};

   Application.delCheked = function(){
   		$(".goodsList li input").each(function(){
	   			if($(this).prop("checked") == true){
	   				$(this).parent().remove();
	   			}
	   		})
   }
});