// TYPING EFFECT ON PROFESSION
var i = 0;
var text = 'Frontend Developer';
var speed = 90;

function typingEffect() {
  if (i < text.length) {
    document.querySelector(".professionInnerDiv2").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
}
typingEffect()

// NAV MENU ON TOGGLE BTN
  const toggleBtn = document.getElementById("toggleBtn");
  const navbar = document.querySelector(".smHidden ul");

  let isMenuVisible = false;

  toggleBtn.addEventListener("click", function () {
      if (isMenuVisible) {
          navbar.style.display = "none";
      } else {
          navbar.style.display = "block";
      }
      isMenuVisible = !isMenuVisible;
  });




