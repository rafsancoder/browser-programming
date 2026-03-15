console.log("Portfolio page loaded.");
console.log("JavaScript file connected successfully.");

const themeButton = document.getElementById("theme-button");
const contactButton = document.getElementById("contact-button");

let isDarkMode = false;
const contactInfo = "Email: rafsan@example.com | LinkedIn: https://www.linkedin.com/";

function setTheme() {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  console.log("Theme changed. Dark mode:", isDarkMode);
}

function showContactInfo() {
  alert(contactInfo);
  console.log("Contact quick action was used.");
}

themeButton.addEventListener("click", function () {
  setTheme();
  console.log("Theme button clicked.");
});

contactButton.addEventListener("click", function () {
  showContactInfo();
  console.log("Contact button clicked.");
});