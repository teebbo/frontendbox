const ratingItems = document.querySelectorAll(".rating-item")
ratingItems.forEach(item =>
    item.onclick = () => {
        ratingItems.forEach(item => item.classList.remove("rating-item--selected"));
        item.classList.add("rating-item--selected");
    }
)

const resultContainer = document.querySelector(".result-container");
const selectedRating = document.querySelector(".result .selected-rating");
const formContainer = document.querySelector(".form")
const form = document.querySelector("form")

form.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault()

    const filtered = Array.from(ratingItems)
        .filter(item => item.classList.contains("rating-item--selected"))[0]

    selectedRating.innerHTML = `You selected ${filtered.textContent} out of ${ratingItems.length}`

    formContainer.classList.add("hide")
    resultContainer.classList.remove("hide")
    resultContainer.classList.add("show")
})