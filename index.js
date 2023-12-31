document.addEventListener("DOMContentLoaded", function () {
  const ratingList = document.querySelectorAll(".rating-list li");
  const submitBtn = document.querySelector(".card-btn");

  console.log(ratingList);
  let selectedRating = 0;

  ratingList.forEach((rating, index) => {
    rating.addEventListener("click", () => {
      console.log(rating);
      ratingList.forEach((item, i) => {
        item.classList.remove("selected");
      });

      for (let i = 0; i <= index; i++) {
        ratingList[i].classList.add("selected");
      }
      selectedRating = index + 1;
    });
  });

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form's default submission behavior
    const urlParams = new URLSearchParams(`rating=${selectedRating}`);
    window.location.href = `/pages/thankYou.html?${urlParams}`;
  }

  document
    .getElementById("ratingForm")
    .addEventListener("submit", handleSubmit);
});
