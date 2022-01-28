var numberofdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbutton; i++) {
  document.querySelector("button").addEventListener("click", function () {
    alert("I am clicked");
  });
}
