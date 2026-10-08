/*
get the elements to modify
figure out when modification should occur
for each element
    figure out which one it is
    output the related number

figure out where/how to display message, get a reference
figure out what day is today
update the display
*/
function displayWelcome() {
    const headerEl = document.querySelector("header")
    const dayIndex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const message = `Happy ${days[dayIndex]}!`;
    const messageEl = document.createElement("p");
    messageEl.textContent = message;
    headerEl.append(messageEl);
};

function renderNumber(element, index) {
    const number = document.createElement("span");
    number.textContent = index + 1;
    element.prepend(number);
};

function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture");
    scriptureElements.forEach(renderNumber);
};

function toggleMenu(){
    const nav = document.querySelectorAll("a");
    nav.forEach(item => {
        item.classList.toggle("toggle");
    });
}

function toggleBar() {
    const bars = document.querySelector(".menu-btn");
    bars.classList.toggle("change");
}

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".menu-btn").addEventListener("click", toggleBar);

addIndex();
displayWelcome();