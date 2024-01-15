// Interactive Rating

const btnSubmit = document.getElementById("btn-submit");
const btnRatingNums = document.getElementsByClassName("card-btn-rating");
const thankYou = document.getElementById("thankYou");
const rating = document.getElementById("rating");
const ratingNum = document.getElementById("card-thankYou-number");

btnSubmit.addEventListener("click", () => {
  thankYou.classList.remove("hidden");

  rating.classList.add("hidden");
});

for (let i = 0; i < btnRatingNums.length; i++) {
  const btnRatingNum = btnRatingNums[i];

  btnRatingNum.addEventListener("click", (event) => {
    const currentbtnRatingNum = event.currentTarget.innerText;

    ratingNum.innerText = currentbtnRatingNum;
  });
}
