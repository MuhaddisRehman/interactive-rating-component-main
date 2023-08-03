// const selectedRatingMessage = `You selected ${selectedRating} out of 5`;
const cardHighlight = document.querySelector(".card-highlight");
console.log("🚀 ~ file: thankYou.js:3 ~ cardHighlight:", cardHighlight);
const searchParams = new URLSearchParams(window.location.search);
const rating = searchParams.get("rating"); // true
cardHighlight.innerText = `You selected ${rating} out of 5`;
