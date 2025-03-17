document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
            console.log("Menu toggled!"); // Debugging log
        });
    }

    document.getElementById("registerForm").addEventListener("submit", async function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, dob }),
            });

            const result = await response.json();
            if (result.success) {
                alert("Registration successful!");
                window.location.href = "/dashboard.html"; // Redirect after success
            } else {
                alert("Registration failed. Try again.");
            }
        } catch (error) {
            console.error("Error registering:", error);
            alert("An error occurred. Please try again.");
        }
    });
});