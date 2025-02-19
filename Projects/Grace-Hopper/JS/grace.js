// This gets the HTML elements
const contactButton = document.getElementById("openPopup");
const popupForm = document.getElementById("popupForm");
const closePopup = document.getElementById("closePopupForm");

// This opens the popup when the button is clicked
contactButton.addEventListener("click", () => {
    popupForm.style.display = "flex";
    setTimeout(() => popupForm.classList.add("show"), 50);
});

// This closes the popup when the close button is clicked
closePopup.addEventListener("click", () => {
    popupForm.style.display = "show";
    setTimeout(() => popupForm.style.display = "none", 500);
});

// This closes the popup when the area outside of the form is clicked
window.addEventListener("click", (e) => {
    if (e.target === popupForm) {
        popupForm.classList.remove("show");
        setTimeout(() => popupForm.style.display = "none", 500);
    }
});