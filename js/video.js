var video;
var play, pause;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.pause();
	video.loop = false;
	console.log("here")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
});
