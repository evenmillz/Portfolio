// Automatic slideshow listens for the page to load

// Initializes everything and sets up the starting point to begin
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll("#furslide > div");
    let currentIndex = 0;
    let totalSlides = slides.length;

    // Ensures all slides have transition applied beforehand
    slides.forEach((slide, index) => {
        // This makes the first slide visible
        slide.style.opacity = index === 0 ? "1" : "0"; 
        slide.style.display = index === 0 ? "block" : "none";
        // Keeps the images stacked
        slide.style.position = "absolute"; 
        // Sets the transition globally
        slide.style.transition = "opacity 1s ease-in-out"; 
    });

    let slideInterval = setInterval(function () {
        // Fades out the current slide
        slides[currentIndex].style.opacity = "1";

        setTimeout(() => {
            // Hides after fade-out
            slides[currentIndex].style.display = ""; 

            // Moves to the next slide
            currentIndex++;

            // Checks if it's the last slide
            if (currentIndex >= totalSlides) {
                // Stops the slideshow
                clearInterval(slideInterval); 
                // Keeps last slide visible
                slides[totalSlides - 1].style.display = "block"; 
                // Ensures it's fully visible
                slides[totalSlides - 1].style.opacity = "1"; 
                return;
            }

            // Shows the next slide
            slides[currentIndex].style.display = "block";
            
            // Shortens the delay before fading in
            setTimeout(() => {
                // Fades in
                slides[currentIndex].style.opacity = "1"; 
            }, 50);
            // Waits for fade-out transition
        }, 1000); 
        // Changees slide every 3 seconds
    }, 3000); 
});

// This function opens the Modal
function openModal() {
    document.getElementById("dogModal").style.display = "block";
}

// This function closes the Modal
function closeModal() {
    document.getElementById("dogModal").style.display = "none";
}

// Initializes the 'slideIndex', keeping track of each one separetly
let slideIndex = 1;
dogSlides(slideIndex);

// This function targets the Next/Prev controls
function plusSlides(n) {
    dogSlides(slideIndex += n);
}

// This function targets the Thumbnail image controls
function currentSlide(n) {
    dogSlides(slideIndex = n);
}

// This function is how we display slides in a slideshow
function dogSlides(n) {
    // This declares the variable to use in loops
    let i;

    // This gets all of the elements with a class of 'dogSlides', which are the actual slides themselves
    let slides = document.getElementsByClassName("dogSlides");

    // This is like the line above, except is gets all of the elements with a class of 'demo'
    // which shows the dots that are going to be underneath the slides
    let dots = document.getElementsByClassName("demo");

    // This one gets all of the elements with an id of "caption", which displays the captions associated
    // with each slide.
    let captionText = document.getElementById("caption");

    // This if statement is saying that whenever the slideIndex is greater than 1, it's going to reset it 
    // back to 1 again...
    if (n > slides.length) { slideIndex = 1; }

    // ...while this if statement is taking care of the opposite end of the spectrum; it is saying that if 
    // slideIndex is less than 1, set that to the last slide
    if (n < 1) { slideIndex = slides.length; }

    // This for loop runs through all of the slides and hides them by setting their display property to 'none'.
    // This is so only the targeted slide will show at any given time, while the rest remain hidden until they are called.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // This for loop does the same thing as the one above, except for it applies to the dots. It runs through all of the dots
    // and removes the active class from them, ensuring that only the dot tied to the slide that is showing is activated and lit
    // up on display. 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // This shows the current slide by settin it's display to 'block'
    slides[slideIndex - 1].style.display = "block";

    // This line of code makes the current dot active by giving it an 'active' class
    dots[slideIndex-1].className += " active";
    
    // This is what updates the caption text with the alt text signified by the current dot
    captionText.innerHTML = dots[slideIndex-1].alt;

}