const button = document.getElementById("button");
const myImage = document.getElementById("image");
const color = document.querySelectorAll(".color-swap");
const body = document.getElementById("body");
button.addEventListener('click', () => {
    if (button.textContent === "Dark Mode") {
        button.textContent = "Light Mode";
        myImage.src = "byui-logo-white.png";
    } else {
        button.textContent = "Dark Mode";
        myImage.src = "byui-logo-blue.webp";
    }
    color.forEach(color => {
        color.classList.toggle("dark-text");
    });
    body.classList.toggle("dark-back");
});