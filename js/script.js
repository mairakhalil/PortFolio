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

//MULTIPLE BG COLORS OF CARDS ON HOVER
const colorChangeElements = document.querySelectorAll(".testimonialInnerDiv");
const colors = ["#0c5050", "teal"];
let intervalIds = new Map();
console.log("div",colorChangeElements)

colorChangeElements.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    // Start an interval to change the background color continuously
    if (!intervalIds.has(element)) {
      let currentIndex = 0;
      const intervalId = setInterval(function () {
        element.style.backgroundColor = colors[currentIndex];
        element.style.color = "white";
        currentIndex = (currentIndex + 1) % colors.length;
        element.style.marginTop = "-2em";
      }, 200);
      intervalIds.set(element, intervalId);
    }
  });

  element.addEventListener("mouseleave", function () {
    // Reset the background color, color, and margin-top
    if (intervalIds.has(element)) {
      clearInterval(intervalIds.get(element));
      intervalIds.delete(element);
      element.style.backgroundColor = "transparent";
      element.style.color = "black";
      element.style.marginTop = "0";
    }
  });
});







