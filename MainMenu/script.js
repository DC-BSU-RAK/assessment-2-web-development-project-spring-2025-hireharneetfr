const introVideo = document.getElementById("intro-video");
const loopVideo = document.getElementById("loop-video");
const pressX = document.getElementById("press-x");

introVideo.onended = () => {
  introVideo.style.display = "none";
  loopVideo.style.display = "block";
  loopVideo.play();
  pressX.style.display = "block";
};

document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "x" && pressX.style.display === "block") {
    window.location.href = "menu.html"; // 👈 sends the user to your main menu page
  }
});

