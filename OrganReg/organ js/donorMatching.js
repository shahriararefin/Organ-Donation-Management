// Handle form submission
document.getElementById('donorMatchingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const tissueType = document.getElementById('tissueType').value;
    const organSize = document.getElementById('organSize').value;
    const heightWeight = document.getElementById('heightWeight').value;
    const urgency = document.getElementById('urgency').value;

    // Perform validation or send data to the server
    if (tissueType && organSize && heightWeight && urgency) {
        console.log('Form submitted successfully');
        // You can add your form submission logic here
    } else {
        console.log('Please fill out all required fields');
    }
});

// Toggle the menu for mobile view
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("hidden");
            console.log("Menu toggled!"); // Debugging log
        });
    }
});
