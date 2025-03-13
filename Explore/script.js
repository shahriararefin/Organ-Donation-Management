document.querySelectorAll(".call").forEach(button => {
    button.addEventListener("click", () => {
        alert("Calling the donor/recipient service...");
    });
});

document.querySelector(".explore").addEventListener("click", () => {
    alert("Exploring more options...");
});
