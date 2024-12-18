$(function() {
	$(window).scroll(function() {//为页面添加页面滚动监听事件
		var wst = $(window).scrollTop() //滚动条距离顶端值
		console.log("滚动条距离顶端值:" + wst)
		console.log("section0距离顶端值:" + $("#section0").offset().top);
		var HeaderShowOffsetTop = $("#section0").offset().top;
		var condition = HeaderShowOffsetTop <= wst;
		if (condition) { //判断滚动条位置
			$('#FlexHeader').removeClass("flex-header-hide");//清除c类
		}else{
			$("#FlexHeader").addClass("flex-header-hide"); //给header加c类
		}
	})
});