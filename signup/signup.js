<script>
        document.getElementById("registerForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const dob = document.getElementById("dob").value;

            if (!name || !email || !password || !dob) {
                alert("All fields are required!");
                return;
            }

            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, dob })
            });

            const result = await response.json();
            if (result.success) {
                alert("Registration successful!");
                window.location.href = "login.html";
            } else {
                alert("Error: " + result.message);
            }
        });
    </script>