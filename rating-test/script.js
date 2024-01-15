// script.js
const ratingContainer = document.getElementById("rating-container");
const responseContainer = document.getElementById("response-container");

// Function to handle rating
function handleRating(rating) {
  // Handle the rating logic (you can send it to the server if needed)
  responseContainer.innerHTML = `You rated this ${rating} stars. Thank you!`;
}

// Example: Create stars for rating
for (let i = 1; i <= 10; i++) {
  const star = document.createElement("span");
  star.textContent = "⭐"; // You can use an image or other symbols for stars
  star.addEventListener("click", () => handleRating(i));
  ratingContainer.appendChild(star);
}
