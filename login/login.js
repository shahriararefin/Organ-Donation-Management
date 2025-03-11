document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (result.success) {
            alert("Login successful!");
            window.location.href = "/dashboard.html"; // Redirect after login
        } else {
            alert("Invalid username or password.");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        alert("An error occurred. Please try again.");
    }
});

// Ensure the DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
            console.log("Menu toggled!"); // Debugging log
        });
    }
});
