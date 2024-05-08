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


// PORTFOLIO SLIDER
let initialCardsToShow = 3; // Number of cards to show initially on large screens

let portfoliocurrentIndex = 0;
const portfolioitems = document.querySelectorAll('.PortfolioInnerDiv');

 // Number of cards to show initially on large screens
function sowportfolioitems() {
  const maxCardsToShow = window.innerWidth <= 768 ? 1 : 3; // Adjust based on screen size

  const startIndex = portfoliocurrentIndex % portfolioitems.length; // Wrap around for smooth transition

  portfolioitems.forEach((item, i) => {
    item.style.display = i >= startIndex && i < startIndex + maxCardsToShow ? 'block' : 'none';
  });
}

if (window.innerWidth <= 768) { // Adjust width as needed
  initialCardsToShow = 1; // Show one card on small screens
}
sowportfolioitems();

// Add event listener to handle screen resize
window.addEventListener('resize', sowportfolioitems);

function portfolionextItems() {
  portfoliocurrentIndex += window.innerWidth <= 768 ? 1 : 3;
    if (portfoliocurrentIndex >= portfolioitems.length) {
      portfoliocurrentIndex = 0;
    }
    sowportfolioitems();
}
function portfolioprevItems() {
  portfoliocurrentIndex -= window.innerWidth <= 768 ? 1 : 3;
    if (portfoliocurrentIndex < 0) {
      portfoliocurrentIndex = portfolioitems.length - (window.innerWidth <= 768 ? 1 : 3);
    }
    sowportfolioitems();
}
document.querySelector('.prevBtn').addEventListener('click', portfolionextItems);
document.querySelector('.nextBtn').addEventListener('click', portfolioprevItems);



// TESTIMONIAL SLIDER
let testimonialcurrentIndex = 0;
const testimonialitems = document.querySelectorAll('.testimonialInnerDiv');

 // Number of cards to show initially on large screens

function sowtestimonialitems() {
  const maxCardsToShow = window.innerWidth <= 768 ? 1 : 3; // Adjust based on screen size

  const startIndex = testimonialcurrentIndex % testimonialitems.length; // Wrap around for smooth transition

  testimonialitems.forEach((item, i) => {
    item.style.display = i >= startIndex && i < startIndex + maxCardsToShow ? 'block' : 'none';
  });
}

// Check screen size on initial load
if (window.innerWidth <= 768) { // Adjust width as needed
  initialCardsToShow = 1; // Show one card on small screens
}
sowtestimonialitems();

// Add event listener to handle screen resize
window.addEventListener('resize', sowtestimonialitems);

function testimonialnextItems() {
  testimonialcurrentIndex += window.innerWidth <= 768 ? 1 : 3;
    if (testimonialcurrentIndex >= testimonialitems.length) {
      testimonialcurrentIndex = 0;
    }
    sowtestimonialitems();
}

function testimonialprevItems() {
  testimonialcurrentIndex -= window.innerWidth <= 768 ? 1 : 3;
    if (testimonialcurrentIndex < 0) {
      testimonialcurrentIndex = testimonialitems.length - (window.innerWidth <= 768 ? 1 : 3);
    }
    sowtestimonialitems();
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

