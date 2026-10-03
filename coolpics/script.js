function toggleNav(){
    const nav = document.querySelectorAll("a");
    nav.forEach(item => {
        item.classList.toggle("hidden");
    });
}
const button = document.querySelector(".menu-btn");
button.addEventListener("click", toggleNav);