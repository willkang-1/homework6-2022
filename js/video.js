var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .95;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .95;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 15;
	}

	console.log("Current Time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted = " + video.muted);
	if(video.muted) {
		video.muted = !video.muted;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = !video.muted;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	var temp = this.value;
	video.volume = temp / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});