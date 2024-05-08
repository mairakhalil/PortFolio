// BORDER ON IMAGE 
let heroImage=document.querySelector(".hero-img img");
heroImage.style.border="16px solid white";
heroImage.addEventListener('mouseenter',()=>{
  heroImage.style.border="16px solid teal";
});
heroImage.addEventListener('mouseleave',()=>{
  heroImage.style.border="16px solid white";
});

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
    //Change the background color continuously
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


let currentIndex = 0;
const items = document.querySelectorAll('.PortfolioInnerDiv');

function showItems(index) {
    items.forEach((item, i) => {
        if (i >= index && i < index + 3) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show the first three items initially
showItems(currentIndex);

function nextItems() {
    currentIndex += 3;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showItems(currentIndex);
}

function prevItems() {
    currentIndex -= 3;
    if (currentIndex < 0) {
        currentIndex = items.length - 3;
    }
    showItems(currentIndex);
}

// Handle button clicks
document.querySelector('.prevBtn').addEventListener('click', prevItems);
document.querySelector('.nextBtn').addEventListener('click', nextItems);



let testimonialcurrentIndex = 0;
const testimonialitems = document.querySelectorAll('.testimonialInnerDiv');

function showItestimonialtems(index) {
  testimonialitems.forEach((item, j) => {
        if (j >= index && j < index + 3) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show the first three items initially
showItestimonialtems(testimonialcurrentIndex);

function testimonialnextItems() {
  testimonialcurrentIndex += 3;
    if (testimonialcurrentIndex >= testimonialitems.length) {
      testimonialcurrentIndex = 0;
    }
    showItestimonialtems(testimonialcurrentIndex);
}

function testimonialprevItems() {
  testimonialcurrentIndex -= 3;
    if (testimonialcurrentIndex < 0) {
      testimonialcurrentIndex = testimonialitems.length - 3;
    }
    showItestimonialtems(testimonialcurrentIndex);
}

// Handle button clicks
document.querySelector('.testimonialprevBtn').addEventListener('click', testimonialnextItems);
document.querySelector('.testimonialnextBtn').addEventListener('click', testimonialprevItems);


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Validate form inputs
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
  }

  // You can add additional validation for email format, etc.

  // If all fields are filled, you can perform further actions like displaying a success message
  alert("Form submitted successfully!");
  // You can also use AJAX to send the form data to a server-side script for processing and sending the email
});
