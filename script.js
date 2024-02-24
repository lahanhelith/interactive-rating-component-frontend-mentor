const ratingText = document.getElementById("rating-text");
const submitBtn = document.getElementById("submit-btn");
const ratingSection = document.getElementById("rating-section");
const thankYouSection = document.getElementById("thank-you-dialog");

function buttonCheck (e) {
    ratingText.innerText = e;
}

submitBtn.addEventListener("click", () => {
    if(ratingText.innerText){
        ratingSection.classList.add("hidden");
        thankYouSection.classList.remove("hidden");
    }else{
        return;
    }
})