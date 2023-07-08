document.oncontextmenu = function() {
	return false;
};

$(document).ready(function() {
	bloq();
	window.history.forward();
	function noBack() {
		window.history.forward();
	}
	$("#screen").val(screen.width);
});

window.onload = setInterval("bloq()", 1000);


