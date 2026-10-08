const gallery = document.querySelector('#pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
function toggleNav(){
    const nav = document.querySelectorAll("a");
    nav.forEach(item => {
        item.classList.toggle("hidden");
    });
}
const button = document.querySelector(".menu-btn");
button.addEventListener("click", toggleNav);
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'
    const imgClicked = e.target;
    const fileName = imgClicked.getAttribute("src");
    const alt = imgClicked.alt;
    const largeImg = fileName.replace("-sm", "-full")
    modalImage.src = largeImg;
    modalImage.alt = alt;
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
       