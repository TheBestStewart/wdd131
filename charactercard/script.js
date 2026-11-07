const char = {
    image: "snortleblat.webp",
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    attacked() {
        this.health -= 20;
        if (this.health <= 0) {
            alert("Uh oh, you died!")
        }
    },
    leveling() {
        this.level += 1;
    }
}
function display() {
    document.getElementById("image").textContent = char.image;
    document.getElementById("name").textContent = char.name;
    document.getElementById("class").textContent = char.class;
    document.getElementById("level").textContent = char.level;
    document.getElementById("health").textContent = char.health;
}
display();
document.getElementById("attacked").addEventListener("click", function() {
    if (char.health > 0) {
        char.attacked();
        display();
    }
});
document.getElementById("leveler").addEventListener("click", function() {
    if (char.health > 0) {
        char.leveling();
        display();
    }
});