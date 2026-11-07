const type = document.getElementById("type");
const id = document.getElementById("id");
const idhead = document.getElementById("idhead");
const code = document.getElementById("code");
const codehead = document.getElementById("codehead");
const student = document.getElementById("student");
const guest = document.getElementById("guest");
const form = document.getElementById("form");
type.addEventListener("change", function() {
    if (type.value === "student") {
        id.classList.add("show");
        idhead.classList.add("show");
        code.classList.remove("show");
        codehead.classList.remove("show");
    }
    else if (type.value === "guest") {
        id.classList.remove("show");
        idhead.classList.remove("show");
        code.classList.add("show");
        codehead.classList.add("show");
    }
});
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const errors = [];
    const num = id.value.trim();
    const pass = code.value.trim();
    const error = document.getElementById("errors");
    const ticket = document.getElementById("ticket");
    const first = document.getElementById("first");
    const last = document.getElementById("last");
    const date = document.getElementById("date");
    const email = document.getElementById("email");
    if (type.value === "student") {
        if (!/^\d{9}$/.test(num)) {
            errors.push("Student I# needs to be 9 digits long.");
        }
    }
    if (type.value === "guest") {
        if (pass !== "EVENT131") {
            errors.push("That isn't the right access code, please try again.")
        }
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const select = new Date(date.value + "T00:00:00");
    if (!date.value || select <= today) {
        errors.push("Please select a day in the future.")
    };
    error.textContent = "";
    ticket.textContent = "";
    if (errors.length > 0) {
        error.textContent = errors.join(" ");
    }
    else {
        const heading = document.createElement("h2");
        heading.textContent = "Ticket Created";
        ticket.appendChild(heading);
        const names = document.createElement("p");
        names.textContent = `${first.value} ${last.value}`;
        ticket.appendChild(names);
        const emails = document.createElement("p");
        emails.textContent = `${email.value}`;
        ticket.appendChild(emails);
        const types = document.createElement("p");
        types.textContent = `${type.value}`;
        ticket.appendChild(types);
        const dates = document.createElement("p");
        dates.textContent = `${date.value}`;
        ticket.appendChild(dates);
    }
});