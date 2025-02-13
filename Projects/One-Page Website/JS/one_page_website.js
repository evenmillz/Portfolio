// This function opens up the lighthouse Modal 
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (!modal) {
        console.error("Modal with ID '${modalId}' not found.");
        return;
    }
    modal.style.display = "block";
}

// This function shuts down the Lightbox Modal and closes out of it
function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (!modal) {
        console.error("Modal with ID '${modalId}' not found.");
        return
    }
    modal.style.display = "none";
}

// This object tracks the slide indexes for each individual section
let slideIndexes = {
    funSlides: 1,
    loveSlides: 1,
    coolSlides: 1
};

// This is a function for the Next/Prev buttons
function plusSlides(n, slideClass) {
    showSlides(slideIndexes[slideClass] += n, slideClass);
}

// This is a function for the thumnails
function currentSlide(n, slideClass) {
    showSlides(slideIndexes[slideClass] = n, slideClass);
}

// Thiis is a function to show the slides and update the captions that go with each one
function showSlides(n, slideClass) {
    let slides = document.getElementsByClassName(slideClass);
    let captionText = document.getElementById('${slideClass)-caption');
}
    if (!slides.length) {
        console.error("No slides found for class '${slideClass}'");
        return;
    }

    if (n > slides.length) { slideIndexes[slideClass] = 1; }
    if (n < 1) { slideIndexes[slideClass] = slides.length }

    for (let slide of slides) {
        slide.style.display = "none";
    if (captionText) {
        captionText.innerHTML = slides[slideIndexes[slideClass] - 1].getElementByTagName("img")[0].alt;
    }
    }
