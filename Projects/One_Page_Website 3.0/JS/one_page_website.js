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