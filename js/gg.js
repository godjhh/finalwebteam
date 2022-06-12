function zoomIn(event) {
  event.target.style.width = "600px";
  event.target.style.height = "400px";
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.width = "";
  event.target.style.height = "";
  event.target.style.transition = "all 0.5s";
}

document.querySelector(".img-button1").addEventListener("click", function () {
  document.querySelector(".jybg").style.transform = "translate(0vw)";
  document.querySelector(".img-button1").style.backgroundColor = "#000";
  document.querySelector(".img-button2").style.backgroundColor = "#fff";
  document.querySelector(".img-button3").style.backgroundColor = "#fff";
  document.querySelector(".img-button4").style.backgroundColor = "#fff";
});
document.querySelector(".img-button2").addEventListener("click", function () {
  document.querySelector(".jybg").style.transform = "translate(-100vw)";
  document.querySelector(".img-button1").style.backgroundColor = "#fff";
  document.querySelector(".img-button2").style.backgroundColor = "#000";
  document.querySelector(".img-button3").style.backgroundColor = "#fff";
  document.querySelector(".img-button4").style.backgroundColor = "#fff";
});
document.querySelector(".img-button3").addEventListener("click", function () {
  document.querySelector(".jybg").style.transform = "translate(-200vw)";
  document.querySelector(".img-button1").style.backgroundColor = "#fff";
  document.querySelector(".img-button2").style.backgroundColor = "#fff";
  document.querySelector(".img-button3").style.backgroundColor = "#000";
  document.querySelector(".img-button4").style.backgroundColor = "#fff";
});
document.querySelector(".img-button4").addEventListener("click", function () {
  document.querySelector(".jybg").style.transform = "translate(-300vw)";
  document.querySelector(".img-button1").style.backgroundColor = "#fff";
  document.querySelector(".img-button2").style.backgroundColor = "#fff";
  document.querySelector(".img-button3").style.backgroundColor = "#fff";
  document.querySelector(".img-button4").style.backgroundColor = "#000";
});
