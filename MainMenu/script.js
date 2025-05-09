const introVideo = document.getElementById("intro-video");
const loopVideo = document.getElementById("loop-video");
const pressX = document.getElementById("press-x");

introVideo.onended = () => {
  introVideo.style.display = "none";
  loopVideo.style.display = "block";

  // Unmute right before playing
  loopVideo.muted = false;
  loopVideo.play();

  pressX.style.display = "block";
};

introVideo.addEventListener("ended", function() {
  // Add the 'ended' class when the first video ends
  introVideo.classList.add("ended");

  // Show the second video and hide the first one
  const loopVideo = document.getElementById("loop-video");
  loopVideo.style.display = "block";
  introVideo.style.display = "none";

  // Show "Press X to Start"
  const pressX = document.getElementById("press-x");
  pressX.style.display = "block";
});

document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "x" && pressX.style.display === "block") {
    window.location.href = "menu.html";
  }
});


