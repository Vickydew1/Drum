var numberofdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbutton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
