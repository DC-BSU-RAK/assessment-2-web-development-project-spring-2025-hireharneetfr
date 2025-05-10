/* grabbing all the stuff we need from the HTML */
const introVideo = document.getElementById("intro-video");
const loopVideo = document.getElementById("loop-video");
const pressX = document.getElementById("press-x");

/* when the intro vid finishes, the  below happens */
introVideo.onended = () => {
  introVideo.style.display = "none";
  loopVideo.style.display = "block";

  loopVideo.muted = false;
  loopVideo.play();

  pressX.style.display = "block";
};

introVideo.addEventListener("ended", function() {
  // Add the 'ended' class when the first video ends
  introVideo.classList.add("ended");

  // Shows the second video and hide the first one
  const loopVideo = document.getElementById("loop-video");
  loopVideo.style.display = "block";
  introVideo.style.display = "none";

  // Shows "Press X to Start"
  const pressX = document.getElementById("press-x");
  pressX.style.display = "block";
});

// this is for when someone actually presses X
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "x" && pressX.style.display === "block") {
    let path = window.location.hostname.includes("github.io")
  ? "/assessment-2-web-development-project-spring-2025-hireharneetfr/MainMenu/menu.html"
  : "../MainMenu/menu.html";
    window.location.href = path;     // sends them to the main menu
  }
});


