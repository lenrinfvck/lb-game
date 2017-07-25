$(document).ready(function() {
	var viewX=document.documentElement.clientWidth;
	var viewY=document.documentElement.clientHeight;
	var a = 0;
	roles = {};
	var game = $(".lb-con").lb_game();
	$(".play-btn").click(function() {
		$(this).fadeOut();
		game.play();
	});
});