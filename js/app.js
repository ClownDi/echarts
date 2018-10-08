$(document).ready(function () { 
	//设定背景高度
	var body_height = $(window).height();
	$(".bg_box").css("min-height",body_height)
	$(".box_ac").css("min-height",body_height)
	//select回调
	$("#region_select").selectpick({
			container: '.region_select',
			onSelect: function(value,text){
				console.log(value+" \n选中的下拉框文本："+text);
			}
		});
	
	var zindex = 20;
	var nav_li =$(".schedule_nav ul li");
	for( var i=0;i<nav_li.length;i++){
		zindex--;
		nav_li[i].style.zIndex = zindex;
	}
	
})