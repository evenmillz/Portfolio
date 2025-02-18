// FIND ALL POPOVERS AND TURN THEM ON
// Tjis finds every element that has "data-bs-toggle=popover"

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

// Loops through each popover element and makes it work
popoverTriggerList.forEach(function (element) {

    // gets the image source for the rating
    var imgSrc = element.getAttribute('data-bs-img'); 
    
    // Puts the image inside the popover
    var content = "<img class='star-rating' src='" + imgSrc +"'>";
    
    // Sets the image as the content, allows the HTML inside of the popover,
    // and makes the popver show when the user hovers over the image
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// FIND ALL TOAST MESSAGES AND TURN THEM ON
// This grabs all toast popups on the page
const toastElList = document.querySelectorAll('.toast')

// This makes each toast message work when activated
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

// FUNCTION TO SHOW TOAST WITH SELECTED OPTIONS
// This gets the selected movie, tiem, and number of the tickets
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    // DISPLAY TOAST MESSAGE
    // This finds the part where the message will show
    var toastBody = document.getElementById('toastBody');

    // This puts the message inside of the toast 
    toastBody.textContent = message;

    // This finds the toast element
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));

    // This shows the toast popup
    toast.show()
}

// FUNCTION TO TRIGGER THE TOAST WHEN BUYING TICKETS
// When the "Buy Tickets" button is clicked, this function snaps into action
function buyTickets() {

    // This calls the function to show the message
    displaySelectedMovieOptions();
}

// JQUERY

// Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function() {

    // When the webpage is scrolled down from the top by 50px this
    // if statement will trigger
    if ($(document).scrollTop() > 50) {

    // Once the 50px requirement has been met add the
    // nav-shrink class selector to the same HTML element
    // that has the nav class
    $("nav").addClass("nav-shrink");

    // Adjust the position of the mobile drop menu
    // to accommodate the new hieght decrease
    $("div.navbar-collapse").css("margin-top", "-6px");
    } else {

    // If the webpage has not been scrolled down or
    // is back at the top of the nav-shrink class selector
    // is removed from the HTML element with the nav
    // class selector
    $("nav").removeClass("nav-shrink");

    // The margin for the drop down menu is now
    // returned to it's original amount
    $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {

    // On click when an element contains just the nav-link class and not the dropdown-toggle and the
    // also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on("click", ".nav-link:not('.dropdown-toggle'), .dropdown-item", function() {        //Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});