<script>
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");

    const readMoreBtn = document.querySelector(".btn-primary");
    readMoreBtn.addEventListener("click", function () {
        alert("Redirecting to more information...");
        // window.location.href = "your-target-url.html"; // Uncomment for redirection
    });
});
</script>