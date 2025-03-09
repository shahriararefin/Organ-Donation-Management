document.addEventListener("DOMContentLoaded", function () {

    
    // Select the form
    const registerForm = document.querySelector("#registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get form values
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const bloodGroup = document.querySelector("#bloodGroup").value;
            const dob = document.querySelector("#dob").value;
            const gender = document.querySelector("#gender").value;

            // Validation
            if (name === "" || email === "" || !bloodGroup || !dob || !gender) {
                alert("Please fill out all fields!");
                return;
            }

            // Show success message
            alert(`Thank you, ${name}! Your registration is successful.`);
            registerForm.reset(); // Clear form after submission
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector("#darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
        localStorage.setItem("darkMode", body.classList.contains("dark") ? "enabled" : "disabled");
    });

    // Load user's preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Toggle FAQ sections
    const faqToggles = document.querySelectorAll(".faq-toggle");
    faqToggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            this.parentElement.classList.toggle("collapse-open");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const organNameInput = document.querySelector("#organName");
    const addOrganBtn = document.querySelector("#addOrgan");
    const organList = document.querySelector("#organList");

    if (addOrganBtn) {
        addOrganBtn.addEventListener("click", function () {
            const organName = organNameInput.value.trim();

            if (organName === "") {
                alert("Please enter an organ name.");
                return;
            }

            // Create table row
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${organName}</td>
                <td><button class="btn btn-error btn-sm removeOrgan">Remove</button></td>
            `;

            organList.appendChild(row);
            organNameInput.value = "";

            // Add event listener for removing organs
            row.querySelector(".removeOrgan").addEventListener("click", function () {
                row.remove();
            });
        });
    }
});
