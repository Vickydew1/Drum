var numberofdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbutton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttoninnerHtml = this.innerHTML;

    switch (buttoninnerHtml) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
        break;
    }
  });
}
