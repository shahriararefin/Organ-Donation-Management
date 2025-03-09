document.addEventListener("DOMContentLoaded", function () {
    // Form submission for registration
    const registerForm = document.querySelector("#registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const bloodGroup = document.querySelector("#bloodGroup").value;
            const dob = document.querySelector("#dob").value;
            const gender = document.querySelector("#gender").value;

            if (name === "" || email === "" || !bloodGroup || !dob || !gender) {
                alert("Please fill out all fields!");
                return;
            }

            const userData = { name, email, bloodGroup, dob, gender };
            localStorage.setItem("donorData", JSON.stringify(userData));

            alert(`Thank you, ${name}! Your registration is successful.`);
            registerForm.reset();
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector("#darkModeToggle");
    const body = document.body;
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
        darkModeToggle.textContent = "☀️"; // Sun icon for dark mode
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
        }
    });

    // FAQ Toggle
    const faqToggles = document.querySelectorAll(".faq-toggle");
    faqToggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            this.parentElement.classList.toggle("collapse-open");
        });
    });

    // Add Organ to List
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

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${organName}</td>
                <td><button class="btn btn-error btn-sm removeOrgan">Remove</button></td>
            `;
            organList.appendChild(row);
            organNameInput.value = "";

            row.querySelector(".removeOrgan").addEventListener("click", function () {
                row.remove();
            });
        });
    }
});
