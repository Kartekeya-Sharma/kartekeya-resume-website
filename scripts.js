console.log("Welcome to Kartekeya Sharma's Resume Website!");

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
