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