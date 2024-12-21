var darkmode = 0;
var greenmode = 0;
$(function() {
	$("#darkmode-chb").click(function() {
		if (this.checked) {
			$("#greenmode-chb").attr("checked",false);greenmode=0;
			$("#darkmode-chb").attr("checked",true);darkmode=1;
		} else {
			$("#darkmode-chb").attr("checked",false);darkmode=0;
		}
		theme_select();
	})
	$("#greenmode-chb").click(function() {
		alert("The theme \"Greenmode\" is unfinished!")
		/*if (this.checked) {
			$("#darkmode-chb").attr("checked",false);darkmode=0;
			$("#greenmode-chb").attr("checked",true);greenmode=1;
		} else {
			$("#greenmode-chb").attr("checked",false);greenmode=0;
		}
		theme_select();*/
	})
})
function theme_select() {
	console.log("select theme");console.log("darkmode" + darkmode);console.log("greenmode" + greenmode);
	if (darkmode==0 & greenmode==0) {$("body").addClass("colorfulmode");} else {$("body").removeClass("colorfulmode");}
	if (darkmode==1) {//darkmode
		$("body").addClass("darkmode");
	} else {
		$("body").removeClass("darkmode");
	}
	if (greenmode==1) {//greenmode
		$("body").addClass("greenmode");
	} else {
		$("body").removeClass("greenmode");
	}
}